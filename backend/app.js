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
const db = pgp("postgresql://jeffreyng:beachbodyp90x@127.0.0.1:5433/blackDiamond")






module.exports = app;