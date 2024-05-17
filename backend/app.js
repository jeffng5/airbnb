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

app.get('/reservation.html', async (req, res, next) => {
    try {
    const result = await db.query('SELECT * FROM reservations')
    return res.status(200).json(result.rows)
    }
    catch (e) {
        console.log(e)
        return res.status(500).json({error: e})
    }
})


app.post('/reservation.html', async (req, res, next) => {
    try {
    const { firstname, lastname, email, checkin, checkout } = req.body
    console.log(req.body)

    const result = await db.query(`INSERT INTO reservations (firstname, lastname, email, checkin, checkout) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [firstname, lastname, email, checkin, checkout]);

    return res.status(201).json(result.rows)
    }
    catch(e) {
        console.log(e)
        return res.status(500).json({error: e})
    }
})




module.exports = app;