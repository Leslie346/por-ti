const express = require('express');
let ejerciciosController = require('../controllers/ejerciciosController');

let router = express.Router();

router.get('/', ejerciciosController.listado);

router.get('/:idEjercicio', ejerciciosController.detalle);

module.exports = router;