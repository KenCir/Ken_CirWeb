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

/**
 * 
 * @param {number} id 
 * @param {Function} callback 
 */
function getBlog(id, callback) {
    connection.query('SELECT * FROM `blogs` WHERE id = ?', function (error, results, fields) {
        if (error) console.error(error);
        callback(results);
    });
}

/**
 * 
 * @param {Function} callback 
 */
function getAllBlog(callback) {
    connection.query('SELECT * FROM `blogs`', function (error, results, fields) {
        if (error) console.error(error);
        callback(results);
    });
}

module.exports = { isConnect, getAllBlog };