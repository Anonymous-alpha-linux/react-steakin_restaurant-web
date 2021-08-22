//Third-party Module
const express = require('express');

///Core Module
const path = require('path');

///Router Initialization
const router = express.Router();

///Local Variable
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
 res.sendFile(path.join(rootDir, 'src', 'View', 'product.html'));
 // res.sendFile(path.join(rootDir, 'src', 'sass', 'product.css'))
});

module.exports = router;