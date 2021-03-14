const express = require('express');
const router = express.Router();

let productsControllers  = require('../../controllers/api/productsController')

router.get('/products/latest', productsControllers.latest)
router.get('/products/offers', productsControllers.offers)
router.get('/products/categories', productsControllers.category)

module.exports = router