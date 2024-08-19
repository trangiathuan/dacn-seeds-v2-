const express = require('express'); //import express
const app = express()
const connection = require('./config/database');
const cors = require('cors')
const port = 8000
const bodyParser = require('body-parser');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const adminRoutes = require('./routes/adminRoutes')
const commentRoutes = require('./routes/commentRoutes');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());
app.use('/', productRoutes)
app.use('/', categoryRoutes)
app.use('/api/auth', authRoutes);
app.use('/api', cartRoutes);
app.use('/api', checkoutRoutes);
app.use('/api', adminRoutes);
app.use('/api', commentRoutes);


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