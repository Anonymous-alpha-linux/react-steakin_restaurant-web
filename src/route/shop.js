//Third-party Module
const express = require('express');

///Core Module
const path = require('path');

///Router Initialization
const router = express.Router();

///Local Variable
const rootDir = require('../util/path');

///Controller module
const productController = require('../Controller/productCtrl')

router.get('/', productController.getFood);

module.exports = router;