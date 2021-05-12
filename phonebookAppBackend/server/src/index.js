const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Contact = require('./contact');

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE, PATCH, OPTIONS");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

mongoose.connect('mongodb://localhost:27017/contacts');
mongoose.connection.on('connected', () => {
    console.log('connected to DB on port 27017');
})
mongoose.connection.on('error', (error) => {
    console.log('error in connection to DB on port 27017', error);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

// Handle GET call
app.get('/contacts/:phoneNumber?', (req, res) => {
    if(req.query.phoneNumber){
        Contact.findOne({
            phoneNumber: req.query.phoneNumber
        },
        (error, contact) => {
            if(contact) {
                res.json(contact);
            }
            res.send("Contact doesn't exist");
        });
    } else {
        Contact.find((error, contacts) => {
            res.json(contacts);
        });
    }
});

// Handle POST Call
app.post('/contacts', (req, res) => {
    let newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        countryCode: req.body.countryCode
    });
    newContact.save((error, contact) => {
        if(error) {
            res.json({
                msg: "Failed to add a new contact" 
            });
        }
        res.json(contact);
    });
});

// Handle PUT call
app.put('/contacts/:phoneNumber', (req, res) => {
    const filter = { phoneNumber: req.params.phoneNumber }
    Contact.findOneAndUpdate(filter,
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            countryCode: req.body.countryCode
        },
        { new: true },
        (error, contact) => {
        if(error){
            res.json({ 
                msg: "Failed to update contact"
            });
        }
        res.json(contact);
    });
});

// Handle DELETE call
app.delete('/contacts/:phoneNumber', (req, res) => {
    Contact.deleteOne({phoneNumber: req.params.phoneNumber}, (error, deleted) => {
        if(error) {
            res.json({
                msg: "Error in deleting contact"
            });
        }
        res.json(deleted);
    })
});