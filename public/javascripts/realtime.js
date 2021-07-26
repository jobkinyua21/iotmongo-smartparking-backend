$(document).ready(function() {
  var socket = io.connect('http://localhost:4000')

  socket.on('status-changed', (parkingLot) => {
    if(parkingLot.status === 'vacant')
      $('#parking-lot').css('background-color','green')
    else
      $('#parking-lot').css('background-color', 'red')
  })
})

