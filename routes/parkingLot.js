var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('parkingLot', { title: 'Parking Lot Example'})
});

module.exports = router;
