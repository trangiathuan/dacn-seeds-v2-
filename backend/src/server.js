const express = require('express'); //import express
const app = express()
const connection = require('./config/database');
const port = 8000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const conn = async () => {
    try {
        await connection();
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch (error) {
        console.log("error connect to DB")
    }
};
conn();