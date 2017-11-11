var express = require('express');
var router = express.Router();
var query = require('../queries.js');

// Routes
// =============================================================

router.get("/", function(req, res) {
	query.getForum(res);
});

router.post("/signin", function(req, res) {
	res.render('index');
})

module.exports = router;
