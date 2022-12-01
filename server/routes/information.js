const router = require('express').Router();
const {    createInformation,
  getInformation,
  updateInformation,
  deleteInformation,
  getInformationById} = require('../controllers/information')
router.get('/',getInformation)
router.get('/getInformationById/:id',getInformationById)
router.post('/createInformation',createInformation)
router.put('/updateInformation/:id',updateInformation)
router.delete('/deleteInformation/:id',deleteInformation)


module.exports = router;