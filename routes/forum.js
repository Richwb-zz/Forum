var express = require('express');
var router = express.Router();
var db = require("../models");


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/api/forum", function(req, res) {
	db.forum.findAll({
		include: [db.thread],
	}).then(function(dbForum) {
		res.json(dbForum);
	});
});

router.get("/api/forum/:id", function(req, res) {
	db.forum.findOne({
		include: [db.thread],
		where: {
			id: req.params.id
		}
	}).then(function(dbForum) {
		res.json(dbForum);
	});
});

router.post("/api/forum", function(req, res) {
	db.forum.create(req.body).then(function(dbForum) {
		res.json(dbForum);
	});
});

router.delete("/api/forum/:id", function(req, res) {
	db.forum.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(dbForum) {
		res.json(dbForum);
	});
});

module.exports = router;
