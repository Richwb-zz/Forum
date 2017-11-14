var express = require('express');
var router = express.Router();
var queries = require('../queries.js')

/* GET users listing. */
router.get('forum/:forumId', function(req, res) {
  queries.getForum(req,res);
});

module.exports = router;