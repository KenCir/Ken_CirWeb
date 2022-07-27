require('dotenv').config();
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});
let connected = false;

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    connected = true;
    console.log('connected as id ' + connection.threadId);
});

function isConnect() {
    return connected;
}

function getAllBlog(callback) {
    connection.query('SELECT * FROM `blogs`', function (error, results, fields) {
        if (error) console.error(error);
        console.log(results);
        callback(results);
    });
}

module.exports = { isConnect, getAllBlog };