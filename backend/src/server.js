const express = require('express'); //import express
const app = express()
const connection = require('./config/database');
const apiRoutes = require('./routes/api')
const cors = require('cors')
const port = 8000


const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/', apiRoutes)
app.use('/api/auth', authRoutes);
app.use('/api', cartRoutes);

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