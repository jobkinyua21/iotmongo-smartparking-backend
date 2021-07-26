const ParkingLot = require('./models/parkingLot')
const mongoose = require('mongoose')

mongoose.connect(
  `mongodb+srv://root:admin@cluster0.mkpfl.mongodb.net/smrtprk?retryWrites=true&w=majority`,
  
  {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex:true 
  }
).then(()=>{
console.log('Database connected');
});

mongoose.Promise = Promise

ParkingLot.deleteMany({}).exec()
  .then(() => { 
    console.log('Cleaned Former Seedings')
    return Promise.resolve()
  })
  .then(() => 
    new ParkingLot({
      _id: mongoose.Types.ObjectId(),
      name: 'slot1',
      status: 'vacant'
    })
    .save()
  )
  .then(res => {
    console.log('Created Record: ' + res)
    mongoose.disconnect()
  })
  .catch(console.err)

