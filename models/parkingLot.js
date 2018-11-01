const mongoose = require('mongoose');

const parkingLotSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  status: {type: String, required: true}
});

module.exports = mongoose.model('ParkingLot',parkingLotSchema);
