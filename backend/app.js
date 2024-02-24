const express = require('express');
const { NotFoundError } = require("./expressError");
const bcrypt = require('bcrypt')
const app = express();
const cors = require("cors")
const {BCRYPT_WORK_FACTOR} = require("./config");
const { ExpressError } = require('./expressError');
// const usersRoutes = require("./routes/users");
require('dotenv').config()
app.use(express.json());
app.use(cors());
// app.use("/users", usersRoutes);
// const { createToken } = require('./helpers/tokens')

const pgp = require('pg-promise')(/* options */)
const db = pgp("postgresql://jeffreyng:beachbodyp90x@127.0.0.1:5433/blackdiamond")

app.post('/users', async function (req, res, next) {
    try {
        const {firstname, lastname, email, checkin, checkout} = req.body
        console.log(req.body)
        const makeReservation = await db.query(`INSERT into reservation (firstname, lastname, email, checkin, checkout) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
        [firstname, lastname, email, checkin, checkout])
        console.log(makeReservation)
    if (makeReservation) {
        return res.status(201).json(makeReservation)
    }
    } catch (err) {return next(err)}

})

app.get('/users', async function (req, res, next) {
    try {
        const getAllReservations = await db.query(`SELECT checkin, checkout from reservation`)
        let results = getAllReservations;
        console.log(results)
        return res.json({results})
    } catch (err) {
        return next(err)
    }
})

app.get('/users/reservation', async function (req, res, next) {
    try {
        const { id } = req.query
        console.log('where am i', id)
        const getReservation = await db.query(`SELECT * from reservation WHERE id = $1`, [id])
        let resnumber = getReservation;
        console.log(resnumber)
        return res.json({resnumber});
    } catch (err) {
        return next(err)
    }
})




module.exports = app;