var express = require('express');
var router = express.Router();
var queries = require('../queries.js');

router.delete("/:threadId", function(req, res) {
 	db.threads.destroy({
 		where: {
 			id: req.params.id
 		}
 	}).then(function(dbThread) {
 		res.render('index');
 	});
});

router.put("/submitpost", function(req, res){
	console.log("===================");
	queries.createPost(req,res);
});

/* GET users listing. */
router.get('/:threadId', function(req, res, next) {
  console.log("test");
  queries.getPost(req, res);
});

module.exports = router;
