var express = require('express');
var router = express.Router();

module.exports = function(io) {
  router.get('/', function(req, res, next) {
    res.render('parkingLot', { title: 'Parking Lot Example' })
  });

  io.on('connection', (socket) => {
    console.log('A User has Connected!')
  })

  return router

}
