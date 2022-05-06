const express = require('express');
const router = express.Router();

//Controller
const usersController = require('../controllers/usersController')

//Middlewares
const validations = require('../middlewares/validateMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Formulario de registro
router.get('/registro', guestMiddleware, usersController.register);

// Procesar el registro
router.post('/registro', validations, usersController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', validations, usersController.processLogin);

// Perfil
router.get('/miperfil', authMiddleware, usersController.profile);

// Logout
router.get('/logout', usersController.logout);

module.exports = router;