var express = require('express');
var router = express.Router();
var db = require("../models");


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/api/user", function(req, res) {
	db.User.findAll({
		include: [db.Post],
	}).then(function(dbUser) {
		res.json(dbUser);
	});
});

router.get("/api/user/:username", function(req, res) {
	db.User.findOne({
		include: [db.Post],
		where: {
			username: req.params.username
		}
	}).then(function(dbUser) {
		res.json(dbUser);
	});
});

router.post("/api/user", function(req, res) {
	db.User.create(req.body).then(function(dbUser) {
		res.json(dbUser);
	});
});

// router.delete("/api/user/:id", function(req, res) {
// 	db.User.destroy({
// 		where: {
// 			id: req.params.id
// 		}
// 	}).then(function(dbUser) {
// 		res.json(dbUser);
// 	});
// });

module.exports = router;
