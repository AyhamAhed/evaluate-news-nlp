const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

// Variables for url and api key

  var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
 });

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    })


// POST Route



// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});

console.log(`Your API key is ${process.env.API_KEY}`);


