
const mongoose = require('mongoose')

// check kết nối mongoDB
const dbState = [
    {
        value: 0,
        label: "Disconnected"
    },
    {
        value: 1,
        label: "Connected"
    },
    {
        value: 2,
        label: "Connecting"
    },
    {
        value: 3,
        label: "Disconnecting"
    }
];
//Kết nối MongoDB
const connection = async () => {
    const options = {
        user: 'giathuan',
        pass: '123456',
        dbName: 'seeds'
    }
    await mongoose.connect('mongodb://localhost:27017/', options);
    //Check connect DB
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value === state).label, "to database"); // connected to db
}
module.exports = connection;