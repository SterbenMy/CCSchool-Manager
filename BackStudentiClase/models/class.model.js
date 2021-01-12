const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
    numeclasa: {
        type: String,
        required: true
    },
    an: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
});

const Class = mongoose.model('Class', classSchema);
module.exports = Class;