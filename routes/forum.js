var express = require('express');
var router = express.Router();
var db = require("../models");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Go back to Homepage');
});

router.get('/login/', function(req, res, next) {
  res.send('go to login');
});

router.get('/new/:thread', function(req, res, next) {
  res.send('New Thread name = param');
});

router.get('/edit/:thread', function(req, res, next) {
  res.send('Update Thread name = param');
});

router.get('/kill/:thread', function(req, res, next) {
  res.send('Destroy Thread name = param');
});

router.get('/view/:thread', function(req, res, next) {
  res.send('Look at thread name = param');
});

module.exports = router;
