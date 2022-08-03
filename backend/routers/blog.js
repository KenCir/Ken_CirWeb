const { getAllBlog, submitBlog, getBlog } = require('../database/Database');
const express = require('express');
const router = express.Router();

router.get('/getall', function (req, res, next) {
    getAllBlog(function (result) {
        res.send(result);
    });
});

router.get('/get/:id', function (req, res, next) {
    getBlog(req.params.id, function (result) {
        res.send(result);
    });
});

router.post('/submit', function (req, res, next) {
    if (!req.body.title || !req.body.subtitle || !req.body.content) return res.status(400).end();

    submitBlog(req.body.title, req.body.subtitle, req.body.content, function () {
        res.send('success');
    });
});

module.exports = router;