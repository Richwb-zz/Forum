var express = require('express');
var router = express.Router();
var queries = require('../queries.js')

/* GET users listing. */
router.get('/:forumId', function(req, res) {
  queries.getThread(req, res);
});

router.get('/thread/newthread', function(req, res) {
  res.render('post');
});

router.put('/submitthread', function(req, res) {
  queries.createThread(req,res);
});

module.exports = router;