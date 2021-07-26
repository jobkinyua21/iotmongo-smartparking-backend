var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('parkingLot', { title: 'Lacharme collection Parking Lot ' })
});


module.exports = router

