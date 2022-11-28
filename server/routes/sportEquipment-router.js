const router = require('express').Router();
const {createEquipment,getEquipment} = require('../controllers/SportEquipment-ctrl')
router.get('/',getEquipment)
router.post('/createEquipment',createEquipment)


module.exports = router;