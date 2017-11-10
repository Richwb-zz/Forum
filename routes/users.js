var express = require('express');
var router = express.Router();


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get("/users", function(req, res) {
// 	db.users.findAll({
// 		// include: [db.Post],
// 	}).then(function(dbUser) {
// 		res.render(dbUser);
// 	});
// });

// router.get("/login", function(req, res) {
// 	var usn = req.body.username;
// 	var pass = req.body.password;
// 	db.users.findOne({
// 		attributes: ['username', 'password'],
// 		where: {
// 			username: usn,
// 			password: pass
// 		}
// 		// include: [db.Post],
// 	}).then(function(dbUser) {
// 		res.render('signin', {
// 		 username: dbUser.username,
// 		 password: dbUser.password
// 		});
// 	});
// });

// router.get("/users/:username", function(req, res) {
// 	db.users.findOne({
// 		include: [db.profiles],
// 		where: {
// 			username: req.params.username
// 		}
// 	}).then(function(dbUser) {
// 		res.render(dbUser);
// 	});
// });

// router.post("/users/new", function(req, res) {
// 	console.log(req.body);
// 	db.users.create(req.body).then(function(dbUser) {
// 		res.render(dbUser);
// 	});
// });

// router.delete("/user/:id", function(req, res) {
// 	db.User.destroy({
// 		where: {
// 			id: req.params.id
// 		}
// 	}).then(function(dbUser) {
// 		res.render(dbUser);
// 	});
// });

module.exports = router;
