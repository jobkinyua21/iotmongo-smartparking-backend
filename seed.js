const ParkingLot = require('./models/parkingLot')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/parking-lot-example', { useNewUrlParser: true})
mongoose.Promise = Promise

ParkingLot.deleteMany({}).exec()
  .then(() => { 
    console.log('Cleaned Former Seedings')
    return Promise.resolve()
  })
  .then(() => 
    new ParkingLot({
      _id: mongoose.Types.ObjectId(),
      name: 'C1',
      status: 'vacant'
    })
  )
  .then(res => {
    console.log('Created Record: ' + res)
    mongoose.disconnect()
  })
  .catch(console.err)

