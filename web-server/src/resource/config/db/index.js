const mongoose = require('mongoose');
const Schema = mongoose.Schema;
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/NKIT');
        console.log('Connect Database Successfull!');
    } catch (error) {
        console.log('Connect Database Failed!');
    }
}

async function disconnect() {
    try {
        await mongoose.disconnect();
        console.log('DisConnect Database Successfully!');
    } catch (error) {
        console.log('Disconnect Database Failed!');
    }
}

module.exports = { mongoose, Schema, connect, disconnect };
