const {io, app} = require('./app')
const parkingLotRouter = require('./routes/parkingLot')
app.use('/parking_lot' ,parkingLotRouter)

const http = require('http').Server(app)
io.attach(http)

http.listen(4000, () => {
  console.log('Server running on port: ' + 4000)
})


