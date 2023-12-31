const { mongoose, Schema } = require('../config/db');

const classroom = new mongoose.Schema({
    name: { type: String, required: true },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
        },
    ],
});

const student = new Schema(
    {
        MSSV: {
            type: String,
            uppercase: true,
            trim: true,
            required: true,
        },
        Name: {
            type: String,
            required: true,
        },
        Birth: {
            type: Date,
            required: true,
        },
        Faculty: {
            type: String,
            required: true,
        },
        QT: {
            type: Number,
            max: 10,
            min: 0,
            required: true,
        },
        GK: {
            type: Number,
            max: 10,
            min: 0,
            required: true,
        },
        CK: {
            type: Number,
            max: 10,
            min: 0,
            required: true,
        },
        TB: {
            type: Number,
            required: true,
        },
        Class: {
            type: String,
            trim: true,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('Student', student);
