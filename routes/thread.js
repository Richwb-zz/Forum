var express = require('express');
var router = express.Router();
var query = require('../queries.js');


/* GET users listing. */
router.get('/:forumId/:threadId', function(req, res, next) {
  query.getThread(res);
});

router.delete("/thread/:id", function(req, res) {
 	db.threads.destroy({
 		where: {
 			id: req.params.id
 		}
 	}).then(function(dbThread) {
 		res.render('index');
 	});
});

module.exports = router;
