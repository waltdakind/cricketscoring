// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'darts are fun!' });   
});

// scoring routes -- add modifiers

router.put('/20', function(req, res) {
    res.json({ message: 'darts are fun!' });   
});
router.put('/19', function(req, res) {
    res.json({ message: 'darts are fun!' });   
});
router.put('/18', function(req, res) {
    res.json({ message: 'darts are fun!' });   
});
router.put('/17', function(req, res) {
    res.json({ message: 'darts are fun!' });   
});
router.put('/16', function(req, res) {
    res.json({ message: 'darts are fun!' });   
});
router.put('/15', function(req, res) {
    res.json({ message: 'darts are fun!' });   
});
router.put('/25', function(req, res) {
    res.json({ message: 'darts are fun!' });   
});
router.put('/brick', function(req, res) {
    res.json({ message: 'darts are fun!' });   
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
