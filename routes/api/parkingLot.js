var express = require('express');
var router = express.Router();
const ParkingLot = require('../../models/parkingLot')


module.exports = function(io) {
  router.put('/', function(req, res, next) {
    const status = req.body.status || 'vacant'

    ParkingLot.updateOne({ name: 'C1' }, { $set: { status: status} })
      .exec()
      .then(() => ParkingLot.findOne({name: 'C1'}).exec())
      .then(result => {
        io.emit('status-changed',result)
        res.status(200).json(result)
      })
  });

  return router
}



