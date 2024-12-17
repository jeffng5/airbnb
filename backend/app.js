const express = require('express');
const postmark = require("postmark");
const app = express();
const cors = require("cors")


const bcrypt = require('bcryptjs')


require('dotenv').config()
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
const { createToken } = require('./helpers/tokens')

// const handleCors = (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     next();
// };

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'frontend')))

// app.use(handleCors)

const password = process.env.PASSWORD
const PORT = process.env.DATABASE_PORT
const USER = process.env.USER
const CLIENT = process.env.EMAIL
const STRIPE = process.env.STRIPE
const YOUR_DOMAIN = process.env.YOUR_DOMAIN

const pgp = require('pg-promise')(/* options */)
const db = pgp(`postgresql://${USER}:${password}@127.0.0.1:${PORT}/postgres`)


/////////////////////////////// BASIC ROUTES ///////////////////////////// 

app.get('/reservations', async (req, res, next) => {
    const monthToNumber = { 'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6, 'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12 }
    try {
        const { month, year } = req.query


        console.log(req.query)
        console.log('month', month)
        console.log('year', year)


        if (month == 'February') {


            const result = await db.query(`SELECT checkin, checkout FROM reservations WHERE checkout BETWEEN '${year}-02-01' and '${year}-02-28' OR EXTRACT(MONTH FROM checkin) = 2 OR EXTRACT(MONTH FROM checkout) = 2`)
            console.log('get reservations', result)
            return res.status(200).json(result)
        }


        else {
            for (monthName in monthToNumber) {
                if (monthName === month) {
                    try {
                        const result = await db.query(`SELECT checkin, checkout FROM reservations WHERE checkout BETWEEN '${year}-${monthToNumber[monthName]}-01' and '${year}-${monthToNumber[monthName]}-30' OR EXTRACT(MONTH FROM checkin) = ${monthToNumber[monthName]} OR EXTRACT(MONTH FROM checkout) = ${monthToNumber[monthName]}`)
                        console.log('get reservations', result)
                        return res.status(200).json(result)
                    }

                    catch (e) {
                        console.log(e)
                        return res.status(500).json({ error: e })
                    }
                }
            }
        }
    }
    catch (e) {
        console.log(e)
        return res.status(500).json({ error: e })
    }

}
)

app.post('/reservation', async (req, res, next) => {
    try {
        const { firstname, lastname, email, checkin, checkout } = req.body
        console.log(req.body)

        const result = await db.query(`INSERT INTO reservations (firstname, lastname, email, checkin, checkout) VALUES ($1, $2, $3, $4, $5) RETURNING id`, [firstname, lastname, email, checkin, checkout]);

        let idNumber = result
        console.log('result of create reservation: ', idNumber)
        return res.json({ idNumber })


    }

    catch (e) {
        console.log(e)
        return res.status(500).json({ error: e })
    }
})

app.get('/checkin', async (req, res, next) => {

    try {
        const { id } = req.query
        console.log(req.query)
        const dateCheckin = await db.query(`SELECT firstname, lastname, email, checkin, checkout FROM reservations WHERE id = $1 `, [id]);

        console.log('fetch successful')

        let reservation = dateCheckin
        return res.status(200).json({ reservation })
    }
    catch (e) {
        console.log(e)
        return res.status(500).json({ error: e })
    }

})

app.post('/email', async (req, res, next) => {
    // try {
    const { id, firstname, lastname, email, checkin, checkout } = req.body
    console.log(req.body)

    let date1 = new Date(checkin.toString());
    let date2 = new Date(checkout.toString());

    let Difference_In_Time = date2.getTime() - date1.getTime();

    let date_diff = Math.round(Difference_In_Time / (1000 * 3600 * 24));

    const quantity = date_diff

    console.log(date_diff, ' was calculated')

    function sendEmail() {
        // Send an email:
        var client = new postmark.ServerClient(CLIENT);

        client.sendEmail({


            "From": "jeffrey@black-diamond-escape.us",
            "To": "jeffrey.ng51213@outlook.com",
            "Subject": "You have a booking",
            "HtmlBody": `Dear owner. You have a booking, RESERVATION ID: ${id}, FIRSTNAME: ${firstname}, LASTNAME: ${lastname}, EMAIL: ${email}, CHECKIN: ${checkin}, CHECKOUT: ${checkout}...Stay duration, ${quantity}`,
            "TextBody": `You have a booking. `,
            "MessageStream": "outbound"

        });
        console.log("EMAIL has been sent!")
    }
    sendEmail();
})

app.delete('/reservation', async (req, res, next) => {
    try {
        const { id } = req.body
        console.log(id, req.body)
        const result = await db.query(`DELETE FROM reservations WHERE id = $1`, [id]);

        console.log(result, 'record delete successful')
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: e })
    }
})

app.get('/password', async (req, res, next) => {

    const { password } = req.query
    console.log("password", password)

    const id = 2
    const results = await db.query(
        `SELECT password from passwordz WHERE id = $1`, [id])
    console.log(results[0].password)
    const pwd = results[0].password;

    console.log('pwd', pwd)


    await bcrypt.compare(password, pwd).then(match => {
        if (match) {
            const user = 'Gina'
            const token = createToken(user)

            let result = res.status(201).json({ user, token })

            console.log('password matches!')
            return result
        } else {
            res.redirect('index.html')
            console.log("PASSWORD ERROR")
            
        }

    }
    )
}
);
;

app.post('/create-checkout-session', async (req, res) => {

    const { quantity } = req.body
    console.log('this is the quantity', quantity)


    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: 'price_1QVz0DChg3YLxEh24Bgj6wfs',
                quantity: quantity,
            }
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success.html`, cancel_url: `${YOUR_DOMAIN}/cancel.html`,
        automatic_tax: { enabled: true },
    });
    res.redirect(303, session.url);
})


module.exports = app