const { mongoose, Schema } = require('../config/db');

const student = new Schema(
    {
        MSSV: {
            type: String,
            uppercase: true,
            trim: true,
        },
        Name: String,
        Birth: Date,
        Faculty: String,
        QT: {
            type: Number,
            max: 10,
            min: 0,
        },
        GK: {
            type: Number,
            max: 10,
            min: 0,
        },
        CK: {
            type: Number,
            max: 10,
            min: 0,
        },
        TB: {
            type: Number,
        },
        Class: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('Student', student);
