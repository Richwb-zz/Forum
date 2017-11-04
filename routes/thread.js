var express = require('express');
var router = express.Router();
var db = require("../models");


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/:forum/:thread", function(req, res) {
	db.Thread.findAll({
		//where{forum:this.forum}
		include: [db.Post],
	}).then(function(dbThread) {
		res.json(dbThread);
	});
});

router.get("/api/thread/:id", function(req, res) {
	db.Thread.findOne({
		include: [db.Post],
		where: {
			id: req.params.id
		}
	}).then(function(dbThread) {
		res.json(dbThread);
	});
});

router.post("/api/thread", function(req, res) {
	db.Thread.create(req.body).then(function(dbThread) {
		res.json(dbThread);
	});
});

router.delete("/api/thread/:id", function(req, res) {
	db.Thread.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(dbThread) {
		res.json(dbThread);
	});
});

module.exports = router;
