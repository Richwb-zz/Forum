var express = require('express');
var router = express.Router();
var Models = require("../models/index.js");

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================

// index route loads view.html
router.get("/", function(req, res) {
	res.render('index');
});

// cms route loads cms.html
router.get("/:forum", function(req, res) {
	res.render("forum", { forum: req.params.forum });
});

// blog route loads blog.html
router.get("/:forum/:thread", function(req, res) {
	res.render("thread", {
			forum: req.params.forum,
			thread: req.params.thread
		});
});

router.get("/:forum/:thread/:post", function(req, res) {
	res.render("post", {
			forum: req.params.forum,
			thread: req.params.thread,
			post: req.params.post
		});
});

// authors route loads author-manager.html
router.get("/:profile", function(req, res) {
	res.render("profile", { profile: req.params.profile });
});


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   //(fileCalled, {data: passed});
// });

module.exports = router;
