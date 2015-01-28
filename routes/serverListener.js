var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  res.send('Hoo I see that the client sent me this data: ' + JSON.stringify(req.body));
});

module.exports = router;
