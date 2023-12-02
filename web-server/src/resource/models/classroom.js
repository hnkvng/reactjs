const { mongoose, Schema } = require('../config/db');

const classroom = new mongoose.Schema({
    Name: { type: String, required: true },
    Students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
        },
    ],
});

module.exports = mongoose.model('Classroom', classroom);
