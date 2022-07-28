const { getAllBlog } = require('../database/Database');
const express = require('express');
const router = express.Router();

router.get('/getall', function (req, res, next) {
    getAllBlog(function (result) {
        res.send(result);
    });
});

router.get('/get/:id', function (req, res, next) {
    getAllBlog(function (result) {
        res.send(result);
    });
});

module.exports = router;