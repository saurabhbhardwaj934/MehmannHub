const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./Models/listing');


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/mehmannhub");
     
}
main().then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.error( err);
    });

app.get('/', (req, res) => {
    res.send(' ka hall ba bhaiya');
});

app.get('/about', (req, res) => {
    res.send('this is the about page of the website');
});


app.post('/contact', (req, res) => {
    res.send('this is the contact page of the website');
});


app.get('/listings',async (req, res) => {
    let samplelisting = new Listing({
        title: "sample listing",
        description: "This is a sample listing",
        price: 100,
        location: "lucknnow",
        country: "India"
    });
    res.json(samplelisting);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});