const createError = require('http-errors');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Server = require('socket.io');
const io = new Server()

io.on('connection', (socket) => {
console.log('A User has connected!')
})

const mongoose = require('mongoose')

const parkingLotRouter = require('./routes/parkingLot')
const parkingLotApiRouter = require('./routes/api/parkingLot')(io)

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

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/parking_lot', parkingLotRouter)
app.use('/api/parking_lot', parkingLotApiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});

io.serveClient(false)

module.exports = { app, io };
