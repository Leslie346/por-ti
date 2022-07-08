const express = require('express');
let ejerciciosController = require('../controllers/ejerciciosController');

let router = express.Router();

router.get('/', ejerciciosController.listado);

router.get('/organizador-de-tareas', function (req, res) {
    res.render('organizador1');
});

router.get('/5sentidos', function (req, res) {
    res.render('5sentidos');
});

router.get('/respiracion', function (req, res) {
    res.render('respiracion');
});

module.exports = router;