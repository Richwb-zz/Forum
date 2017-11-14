var express = require('express');
var router = express.Router();
var query = require('../queries.js');
var session = require('express-session');
var login = require('../querytest.js')

// Routes
// =============================================================

router.get("/", function(req, res) {
	query.getForum(req, res);
});

router.post("/login", function(req, res) {
	login.login(req, res);
})

module.exports = router;
