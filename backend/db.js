// "use strict";

const { Client } = require("pg");
// const { getDatabaseUri } = require("./config");


let db;
const password = process.env.PASSWORD;
const USER = process.env.USER;
const DATABASE_PORT = process.env.DATABASE_PORT;

console.log(password)

db = new Client({
  connectionString: `postgresql://${USER}:${password}@localhost:${DATABASE_PORT}/postgres`
});



db.connect();

module.exports = db;