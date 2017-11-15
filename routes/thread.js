var express = require('express');
var router = express.Router();
var query = require('../queries.js');


/* GET users listing. */
router.get('/:threadId', function(req, res, next) {
  query.getPosts(req,res);
});

router.delete("/:threadId", function(req, res) {
 	db.threads.destroy({
 		where: {
 			id: req.params.id
 		}
 	}).then(function(dbThread) {
 		res.render('index');
 	});
});

router.get("/newthread", function(req, res){
	res.render("post", {newThread: true});
});

module.exports = router;
