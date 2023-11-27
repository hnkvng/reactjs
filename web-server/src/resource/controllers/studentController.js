const express = require('express');
const router = express.Router();
const { mongoose } = require('../config/db');
const Student = require('../models/student');

// Điều khiển

class studentControllers {
    //GET /home
    show(rep, res) {
        Student.find()
            .then((student) => {
                student = student.map((element, index) => {
                    return {
                        STT: index + 1,
                        MSSV: element.MSSV,
                        Name: element.Name,
                        Date: `${element.Date.getDate()}/${
                            element.Date.getMonth() + 1
                        }/${element.Date.getFullYear()}`,
                        Faculty: element.Faculty,
                        QT: element.QT,
                        GK: element.GK,
                        CK: element.CK,
                        TB: element.TB,
                        Class: element.Class,
                    };
                });
                res.json({ student });
            })
            .catch((err) => {
                res.json({ message: err.message });
            });
    }
}

module.exports = new studentControllers();
