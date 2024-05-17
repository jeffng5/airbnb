const express = require('express');
const router = express.Router();
const db = require("../db");


router.post('/reservation', async function (req, res, next ) {
    const { firstname, lastname, email, checkin, checkout } = req.body
    console.log(req.body)

    const addRes = await db.query(`INSERT INTO res (firstname, lastname, email, checkin, checkout) VALUES ($1, $2, $3, $4, $5)`, [firstname, lastname, email, checkin, checkout])

    let result = addRes.rows
    console.log(result)
    return res.status(201).json({ result })
});


module.exports = router;