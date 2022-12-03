const router = require('express').Router();
const {  createStore,
  getStore,
  updateStore,
  getStoreById,
  deleteStore} = require('../controllers/store')
router.get('/',getStore)
router.get('/getStoreById/:id',getStoreById)
router.post('/createStore',createStore)
router.put('/updateStore/:id',updateStore)
router.delete('/deleteStore/:id',deleteStore)


module.exports = router;

