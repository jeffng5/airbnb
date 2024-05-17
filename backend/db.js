// "use strict";

const { Client } = require("pg");
// const { getDatabaseUri } = require("./config");


let db;
const password = process.env.PASSWORD;
const USER = process.env.USER;
const DATABASE_PORT = process.env.DATABASE_PORT;

console.log(password)

// if (process.env.NODE_ENV === "production") {
//   db = new Client({
//     connectionString: getDatabaseUri(),
  
//     ssl: {
//       rejectUnauthorized: false
//     }
//   });
// } else {
  db = new Client({
    connectionString: `postgresql://${USER}:beachbodyp90x@127.0.0.1:5431/blackdiamond`
  });
// }


db.connect();

module.exports = db;