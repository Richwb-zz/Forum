var express = require('express');
var bodyParser = require('body-parser');

// Get access to db
var db = require('../models');

// Create Router Object & middleware
var router = express.Router();
var jsonParse = bodyParser.urlencoded({ extended: false });
router.use(jsonParse);