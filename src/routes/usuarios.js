const express = require('express');
const router = express.Router();

//Controller
const usersController = require('../controllers/usersController')

//Middlewares
const validations = require('../middlewares/validateMiddleware');

// Formulario de registro
router.get('/registro', usersController.register);

// Procesar el registro
router.post('/registro', validations, usersController.processRegister);

// Formulario de login
router.get('/login', usersController.login);

router.post('/miperfil/:userId', validations, usersController.create);

// Perfil
router.get('/perfil/:userId', usersController.profile);

module.exports = router;