
const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
router.get('/', indexController.index);
router.get('/products', indexController.ListOfProducts);
router.post('/new-product', indexController.newProduct);
module.exports= router;