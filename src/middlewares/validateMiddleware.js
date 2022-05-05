const { check, validationResult, body } = require('express-validator');

// Validaciones

const validateRegister = [
    body('name').notEmpty().withMessage('Debes completar el campo de nombre').bail()
    .isLength({ min: 2 }).withMessage('El nombre debe ser más largo'),
    body('last_name').notEmpty().withMessage('Debes completar el campo de apellido').bail()
    .isLength({ min: 2 }).withMessage('El apellido debe ser más largo'),
    body('email').isEmail().withMessage('Debes completar un e-mail válido').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga')
]

module.exports = validateRegister;