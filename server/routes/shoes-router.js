const router = require('express').Router();
const {createShoes,getShoes} = require('../controllers/Shoes-crtl')
router.get('/',getShoes)
router.post('/createShoes',createShoes)


module.exports = router;