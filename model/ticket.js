const mongoose = require('mongoose');
const { Timestamp } = require('mongodb');

const Ticket = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    timing: {
        type: String,
        required: true
    },
    showtime: {
        type: Date
    }
});

module.exports = mongoose.model('moviebook',Ticket);