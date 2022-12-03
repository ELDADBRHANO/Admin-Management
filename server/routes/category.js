const router = require('express').Router();
const {    createCategories,
  getCategories,
  deleteCategories,
  updateCategory,
  getCategoryById} = require('../controllers/categories')
router.get('/',getCategories)
router.get('/getCategoriesById/:id',getCategoryById)
router.post('/createCategory',createCategories)
router.put('/updateCategory/:id',updateCategory)
router.delete('/deleteCategory/:id',deleteCategories)


module.exports = router;