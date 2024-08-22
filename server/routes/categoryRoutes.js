const express = require('express');
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
  
} = require('../controllers/categoryController');
const router = express.Router();

router.post('/addcategorys', createCategory);
router.get('/addcategorys', getCategories);
router.get('/updatecategory/:id', getCategoryById);
router.put('/addcategorys/:id', updateCategory);
router.delete('/deletecategorys/:id', deleteCategory);

module.exports = router;
