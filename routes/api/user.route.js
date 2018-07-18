var express = require('express')
var router = express.Router()
var UserController = require('../../controllers/users.controller');
var Authorization = require('../../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
router.post('/registration', UserController.createUser)
router.post('/login/', UserController.loginUser)
router.get('/', Authorization, UserController.getUsers)
router.put('/', Authorization, UserController.updateUser)
router.delete('/:id', Authorization, UserController.removeUser)

// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login