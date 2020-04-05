let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const config = require('./config/config');
let cityRouter = require('./routes/city.routes');
let districtRouter = require('./routes/district.routes');
let wardRouter = require('./routes/ward.routes');
let app = express();
let cors = require('cors');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cityRouter);
app.use('/', districtRouter);
app.use('/', wardRouter);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let mongoose = require('mongoose');

//Thiết lập một kết nối mongoose mặc định
mongoose.connect( process.env.MONGODB_URI || config.url, {useNewUrlParser: true});
//Ép Mongoose sử dụng thư viện promise toàn cục
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
let db = mongoose.connection;

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;
