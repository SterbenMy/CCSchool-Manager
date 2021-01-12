const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    nume: {
        type: String,
        required: true
    },
    prenume: {
        type: String,
        required: true
    },
    ani: {
        type: Number,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    gen: {
        type: String,
        required: true
    },
    clasa: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;