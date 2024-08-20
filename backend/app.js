const express = require('express');

const app = express();
const cors = require("cors")



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

app.get('/reservation/:month', async (req, res, next) => {

    const { month } = req.params
    console.log('params', req.params)
    console.log('month', month)
    const monthToNumber = { 'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6, 'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12 }

    for (monthName in monthToNumber) {
        if (monthName === month) {
            try {
                const result = await db.query(`SELECT checkin, checkout FROM reservations WHERE checkout BETWEEN '2024-${monthToNumber[monthName]}-01' and '2024-${monthToNumber[monthName]}-30' OR EXTRACT(MONTH FROM checkin) = ${monthToNumber[monthName]} OR EXTRACT(MONTH FROM checkout) = ${monthToNumber[monthName]}`)
                console.log('get reservations', result)
                return res.status(200).json(result)
            }
            catch (e) {
                console.log(e)
                return res.status(500).json({ error: e })
            }

        }
    }
})

app.post('/reservation', async (req, res, next) => {
    try {
        const { firstname, lastname, email, checkin, checkout } = req.body
        console.log(req.body)

        const result = await db.query(`INSERT INTO reservations (firstname, lastname, email, checkin, checkout) VALUES ($1, $2, $3, $4, $5) RETURNING id`, [firstname, lastname, email, checkin, checkout]);

            let idNumber= result
            console.log('result of create reservation: ', idNumber)
            return res.json({idNumber})

            
        }
    
    catch (e) {
        console.log(e)
        return res.status(500).json({ error: e })
    }
})

app.get('/checkin', async (req, res, next) => {

    try {
        const {id} = req.query
        console.log(req.query)
        const dateCheckin = await db.query(`SELECT firstname, lastname, email, checkin, checkout FROM reservations WHERE id = $1 `, [id]);

        console.log('fetch successful')

        let reservation = dateCheckin
        return res.status(200).json({reservation})
    }
    catch (e) {
        console.log(e)
        return res.status(500).json({ error: e })
    }

})



module.exports = app;