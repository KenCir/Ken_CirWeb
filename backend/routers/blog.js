const { getAllBlog, submitBlog, getBlog } = require('../database/database');
const express = require('express');
const router = express.Router();

router.get('/getall', function (req, res, next) {
    res.send(getAllBlog());
});

router.get('/get/:id', function (req, res, next) {
    res.send(getBlog(req.params.id));
});

router.post('/submit', function (req, res, next) {
    if (!req.body.title || !req.body.subtitle || !req.body.content || !req.body.password) return res.status(400).end();

    if (req.body.password !== process.env.BLOG_PASSWORD) return res.status(403).end();

    submitBlog(req.body.title, req.body.subtitle, req.body.content);

    res.status(200).end();
});

module.exports = router;