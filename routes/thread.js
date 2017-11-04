var express = require('express');
var router = express.Router();
var db = require("../models");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get("/api/thread", function(req, res) {
	db.Thread.findAll({
		include: [db.Post],
	}).then(function(dbThread) {
		res.json(dbThread);
	});
});

app.get("/api/thread/:id", function(req, res) {
	db.Thread.findOne({
		include: [db.Post],
		where: {
			id: req.params.id
		}
	}).then(function(dbThread) {
		res.json(dbThread);
	});
});

app.post("/api/thread", function(req, res) {
	db.Thread.create(req.body).then(function(dbThread) {
		res.json(dbThread);
	});
});

app.delete("/api/thread/:id", function(req, res) {
	db.Thread.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(dbThread) {
		res.json(dbThread);
	});
});

module.exports = router;
