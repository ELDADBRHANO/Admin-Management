const router = require('express').Router();
const {  createTeams,
  getTeams,
  deleteTeams,
  updateTeam,
  getTeamsById} = require('../controllers/Teams-ctrl')
router.get('/',getTeams)
router.get('/getTeamsById/:id',getTeamsById)
router.post('/createTeams',createTeams)
router.put('/updateTeam/:id',updateTeam)
router.delete('/deleteTeams/:id',deleteTeams)


module.exports = router;