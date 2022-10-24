const sql = require("mysql")
const dotenv = require("dotenv").config()

const db = sql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWOD,
    database:process.env.DATABASE,
})

module.exports =db;