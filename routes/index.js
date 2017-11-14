var express = require('express');
var router = express.Router();
var query = require('../queries.js');
var session = require('express-session');

// Routes
// =============================================================

router.get("/", function(req, res) {
	query.getForum(req, res);
});

router.post("/login", function(req, res) {
	query.login(req, res);
})

module.exports = router;