"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;
// const password = process.env.REACT_APP_APIKEY


if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabaseUri(),
  
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    // connectionString: getDatabaseUri()
    connectionString: `postgresql://jeffreyng:beachbodyp90x@127.0.0.1:5433/blackDiamond`
  });
}


db.connect();

module.exports = db;