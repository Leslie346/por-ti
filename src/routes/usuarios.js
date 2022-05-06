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

// Procesar el login
router.post('/login', validations, usersController.processLogin);

// Perfil
router.get('/miperfil', usersController.profile);

module.exports = router;