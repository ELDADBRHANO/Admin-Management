const router = require('express').Router();
const {createClothes,getClothes} = require('../controllers/Clothes-ctrl')
router.get('/',getClothes)
router.post('/createClothes',createClothes)


module.exports = router;

