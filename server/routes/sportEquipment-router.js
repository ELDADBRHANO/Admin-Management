const router = require('express').Router();
const {  createEquipment,
  getEquipment,
  updateEquipment,
  deleteEquipment,
  getEquipmentById} = require('../controllers/SportEquipment-ctrl')
router.get('/',getEquipment)
router.get('/getEquipmentById/:id',getEquipmentById)
router.post('/createEquipment',createEquipment)
router.put('/updateEquipment/:id',updateEquipment)
router.delete('/deleteEquipment/:id',deleteEquipment)


module.exports = router;