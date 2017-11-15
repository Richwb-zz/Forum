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
});

router.get("/signout", function(req, res) {
	req.session.destroy();
	res.redirect("/");
});

router.get("/register", function(req, res) {
	res.render("register");
});

router.get("/profile/:user", function(req, res) {
	res.render("profile");
})


module.exports = router;