var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/:forumId/:threadId', function(req, res, next) {
  res.render('');
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
