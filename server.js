const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require("cors");

//initialize express.
const app = express();

// Initialize variables.
const port = process.env.PORT || 3000;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Set the front-end folder to serve public assets.
app.use(express.static('JavaScriptSPA'))
app.use(cors());

// Set up a route for index.html.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the server.
app.listen(port);
console.log('Listening on port ' + port + '...');