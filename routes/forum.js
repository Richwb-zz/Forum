var express = require('express');
var router = express.Router();
var queries = require('../queries.js')

/* GET users listing. */
router.get('/:forumId', function(req, res) {
  queries.getThread(res);
});

module.exports = router;