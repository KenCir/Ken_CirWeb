const express = require('express');
const logger = require('morgan');
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Express.static('./dist'))

app.use((req, res, next) => {
    console.log(req.originalUrl)
    // res.header('Access-Control-Allow-Origin', 'http://localhost');
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api', require('./backend/routers/api'));
app.listen(80, function () {
    console.log(`Server listening to http://localhost`);
});