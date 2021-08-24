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
const productController = require('../Controller/productCtrl')
const adminController = require('../Controller/adminCtrl');

router.use(express.static(path.join(rootDir, '/src/sass')))

router.get('/', adminController.getDashboard);

router.get('/AddFood', (req, res, next) => {
 // res.sendFile(path.join(rootDir, "/src/View/add-food.html"));
 res.render('add-food', {
  docTitle: 'Steak-in Restaurant | The luxury restaurant in Danang',
  pageName: 'Add Product'
 })
});

router.post('/AddFood', (req, res, next) => {
 const item = {
  name: req.body.name,
  type: req.body.type,
  img_url: req.body.img_url,
  desc: req.body.desc,
  price: req.body.price,
 }

 products.push(item);

 return res.redirect('/');
})

router.get('/product', productController.getFood)

module.exports = router