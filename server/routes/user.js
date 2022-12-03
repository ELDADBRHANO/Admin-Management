const router = require('express').Router()
const {
    register, login,getUsers
} = require('../controllers/user')
router.get('/getUsers',getUsers)
router.post('/register', register)
router.post('/login', login)


module.exports = router;