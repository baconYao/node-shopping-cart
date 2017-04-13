var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var Product = require('../models/product');
var Cart = require('../models/cart');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find((err, docs) => {
    var productChunks = [];
    var chunkSize = 3;
    for(var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i+chunkSize));   //[[],[],[],...]
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
  });
});

router.get('/add-to-cart/:id', (req, res) => {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, (err, product) => {
    if(err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
});


module.exports = router;
 
