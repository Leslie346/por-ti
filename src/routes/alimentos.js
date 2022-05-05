const express = require('express');
let alimentosController = require('../controllers/alimentosController');

let router = express.Router();

router.get('/:idAlimento', alimentosController.detalle);

module.exports = router;