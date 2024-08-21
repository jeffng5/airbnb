const express = require('express');
var postmark = require("postmark");
const app = express();
const cors = require("cors")
const CLIENT = process.env.EMAIL
console.log(CLIENT)

require('dotenv').config()
app.use(express.json());
app.use(cors());


const handleCors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
};

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'frontend')))


app.use(handleCors)

const password = process.env.PASSWORD
const PORT = process.env.DATABASE_PORT
const USER = process.env.USER

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
        return res.status(500).json({error: e})
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

    function sendEmail() {
        // Send an email:
        var client = new postmark.ServerClient(CLIENT);

        client.sendEmail({


            "From": "jeffrey@black-diamond-escape.us",
            "To": "jeffrey.ng51213@outlook.com",
            "Subject": "You have a booking",
            "HtmlBody": `Dear owner. You have a booking, RESERVATION ID: ${id}, FIRSTNAME: ${firstname}, LASTNAME: ${lastname}, EMAIL: ${email}, CHECKIN: ${checkin}, CHECKOUT: ${checkout}`,
            "TextBody": `You have a booking. `,
            "MessageStream": "outbound"

        });
        console.log("EMAIL has been sent!")
    }
    sendEmail();
})



module.exports = app;