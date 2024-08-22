const express = require('express');
const {
  createSubCategory,
  getSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory
} = require('../controllers/subcategoryController');
const router = express.Router();

router.post('/subaddcategory', createSubCategory);
router.get('/subaddcategory', getSubCategories);
router.get('/updatesubcategory/:id', getSubCategoryById);
router.put('/addsubcategorys/:id', updateSubCategory);
router.delete('/deletesubcategorys/:id', deleteSubCategory);

module.exports = router;
