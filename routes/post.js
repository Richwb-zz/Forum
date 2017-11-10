var express = require('express');
var router = express.Router();
var db = require("../models");


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/:forum/:thread/:posts", function(req, res) {
	db.posts.findAll({
		//where{forum:this.forum}
	}).then(function(dbPost) {
		res.json(dbPost);
	});
});

router.put("/edit/:post_id", function(req, res) {
	db.posts.findOne({
		where: {
			post_id: req.params.post_id
		}
	}).then(function(dbPost) {
		res.json(dbPost);
	});
});

router.post("/new_post", function(req, res) {
	db.posts.create(req.body).then(function(dbPost) {
		res.json(dbPost);
	});
});

router.delete("/post/:id", function(req, res) {
	db.posts.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(dbPost) {
		res.json(dbPost);
	});
});

module.exports = router;
