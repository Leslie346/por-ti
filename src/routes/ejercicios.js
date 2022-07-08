const express = require('express');
let ejerciciosController = require('../controllers/ejerciciosController');

let router = express.Router();

router.get('/', ejerciciosController.listado);

router.get('/organizador-de-tareas', function (req, res) {
    res.render('organizador1');
});

router.get('/organizador-de-tareas2', function (req, res) {
    res.render('organizador2');
});

module.exports = router;