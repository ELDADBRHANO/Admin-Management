const router = require('express').Router();
const {createClothes,getClothes,updateClothe,getClothesById,deleteClothe} = require('../controllers/Clothes-ctrl')
router.get('/',getClothes)
router.get('/getClothesById/:id',getClothesById)
router.post('/createClothes',createClothes)
router.put('/updateClothe/:id',updateClothe)
router.delete('/deleteClothe/:id',deleteClothe)


module.exports = router;

