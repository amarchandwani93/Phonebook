const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    countryCode: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('contact', ContactSchema);