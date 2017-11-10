var express = require('express');
var router = express.Router();

// Routes
// =============================================================

router.get("/", function(req, res) {
	res.render('index');
});

router.post("/signin", function(req, res) {
	res.render('index');
})

module.exports = router;
