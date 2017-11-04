var express = require('express');
var router = express.Router();
var db = require("../models");

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================

// index route loads view.html
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

// cms route loads cms.html
app.get("/forum", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/forum.html"));
});

// blog route loads blog.html
app.get("/thread", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/thread.html"));
});

app.get("/post", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/post.html"));
});

// authors route loads author-manager.html
app.get("/profile", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/profile.html"));
});


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   //(fileCalled, {data: passed});
// });

module.exports = router;
