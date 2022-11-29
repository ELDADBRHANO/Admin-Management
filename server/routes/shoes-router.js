const router = require('express').Router();
const {  getShoes,
  findShoesById,
  updateClothes,
  deleteShoes,createShoes} = require('../controllers/Shoes-crtl')
router.get('/',getShoes)
router.get('/findShoesById/:id',findShoesById)
router.post('/createShoes',createShoes)
router.put('/updateClothes/:id',updateClothes)
router.delete('/deleteShoes/:id',deleteShoes)


module.exports = router;