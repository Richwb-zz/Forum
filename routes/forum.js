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
});// get all forums to display on home page

router.get("/api/forum/:forum_name", function(req, res) {
	db.forum.findOne({
		include: [db.thread],
		where: {
			forum_name: req.params.forum_name
		}
	}).then(function(dbForum) {
		res.json(dbForum);
	});
});//search for a specific forum

module.exports = router;
