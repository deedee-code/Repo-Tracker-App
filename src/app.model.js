const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    payload: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Event', eventSchema)