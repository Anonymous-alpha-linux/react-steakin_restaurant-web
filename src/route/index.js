///Core Module
const path = require('path');

//Third-party Module
const express = require('express');

///Router Initialization
const router = express.Router();

///Local module
const rootDir = require('../util/path');
const { url } = require('inspector');

///Controller module
const indexController = require('../Controller/indexCtrl');
const productController = require('../Controller/productCtrl')

router.use(express.static(path.join(rootDir, '/src')))
router.get('/product', productController.getFood);

router.get('/menu', indexController.getMenu);

router.get('/about', indexController.getAbout);

router.get('/booking-detail', indexController.getBookingDetail);

router.get('/review', indexController.getReview);

router.get('/', indexController.getIndex);

module.exports = router