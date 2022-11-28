const router = require('express').Router();
const {createTeams,getTeams} = require('../controllers/Teams-ctrl')
router.get('/',getTeams)
router.post('/createTeams',createTeams)


module.exports = router;