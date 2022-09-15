require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const database = require('./database/database');
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
database.initialize();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.WEB_ENDPOINT);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api', require('./routers/api'));
app.listen(3000, function () {
    console.log(`Server listening to http://localhost:3000`);
});