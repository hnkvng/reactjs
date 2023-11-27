const express = require('express');
const router = express.Router();
const { mongoose } = require('../config/db');
const Student = require('../models/student');

// Điều khiển

class homeControllers {
    //GET /home
    show(rep, res) {
        res.render('home');
    }
}

module.exports = new homeControllers();
