const express = require('express');

const router = express.Router();

const productController = require('../controllers/product');

//landing page route
router.get('/shop', productController.getProducts);

//product details route
router.get('/product/:productId', productController.getProduct);

//cart routes
router.post('/cart', productController.postCart);
router.get('/cart', productController.getcart);
//delete cart
router.post('/cart-delete-item', productController.postCartDelete);

//order route

router.post('/order', productController.postOrder);
router.get('/orders', productController.getOrder);

//logout

router.post('/logout', productController.logout);

module.exports = router;