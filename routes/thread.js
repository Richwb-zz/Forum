var express = require('express');
var router = express.Router();
var db = require("../models");


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/:forum/:thread", function(req, res) {
	db.thread.findAll({
		//where{forum:this.forum}
	}).then(function(dbThread) {
		res.json(dbThread);
	});
});

router.get("/api/thread/:thread_name", function(req, res) {
	db.thread.findOne({
		where: {
			thread_name: req.params.thread_name
		}
	}).then(function(dbThread) {
		res.json(dbThread);
	});
});

router.post("/api/thread", function(req, res) {
	db.thread.create(req.body).then(function(dbThread) {
		res.json(dbThread);
	});
});

router.delete("/api/thread/:id", function(req, res) {
	db.thread.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(dbThread) {
		res.json(dbThread);
	});
});

module.exports = router;
