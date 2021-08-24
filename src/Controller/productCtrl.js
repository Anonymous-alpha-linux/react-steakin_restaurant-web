const products = [];

exports.getFood = (req, res, next) => {
 res.render('product', {
  products: products,
  docTitle: 'Steak-in Restaurant | The luxury restaurant in Danang',
  pageName: 'Product',
  path: '/',
  hasProducts: products.length > 0,
  activeShop: true,
  productCSS: true,
 })
};

exports.getAddFood = (req, res, next) => {
 res.render('add-food', {
  products: products,
  docTitle: 'Steak-in Restaurant | The luxury restaurant in Danang',
  pageName: 'Product',
  path: '/',
  hasProducts: products.length > 0,
  activeShop: true,
  productCSS: true,
 })
};

exports.postAddFood = (req, res, next) => {
 const item = {
  name: req.body.name,
  type: req.body.type,
  img_url: req.body.img_url,
  desc: req.body.desc,
  price: req.body.price,
 }

 products.push(item);

 return res.redirect('/');
}