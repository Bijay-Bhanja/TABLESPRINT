const express = require('express');
const multer = require('multer');
const path = require('path');
const {
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct
  
} = require('../controllers/productController');
const router = express.Router();


router.post('/createproduct', createProduct);
router.get('/getproduct', getProduct);
router.get('/getproductbyid/:id', getProductById);
router.put('/updateproduct/:id', updateProduct);
router.delete('/deleteproduct/:id', deleteProduct);

module.exports = router;
