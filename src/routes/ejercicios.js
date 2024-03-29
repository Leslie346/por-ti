const express = require('express');
let ejerciciosController = require('../controllers/ejerciciosController');
const objetivoMiddleware = require('../middlewares/objetivoMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

let router = express.Router();


router.get('/organizador-de-tareas', function (req, res) {
    res.render('organizador1');
});

router.get('/organizador-de-tareas2', function (req, res) {
    res.render('organizador2');
});

router.get('/5sentidos', function (req, res) {
    res.render('5sentidos2');
});

router.get('/respiracion', function (req, res) {
    res.render('respiracion');
});

router.get('/registro-de-ansiedad', function (req, res) {
    res.render('ansiedad_');
});

router.get('/ansiedad', function (req, res) {
    res.render('ansiedad');
});


router.get('/arteterapia', function (req, res) {
    res.render('arteterapia');
});

router.get('/registro-de-sueno', function (req, res) {
    res.render('registro-de-sueno');
});

router.get('/imaginacion-guiada', function (req, res) {
    res.render('imaginacion');
});

router.get('/imaginacion-guiada2', function (req, res) {
    res.render('imaginacion2');
});

router.get('/tapping', function (req, res) {
    res.render('tapping');
});

router.get('/alimentos', function (req, res) {
    res.render('alimentos');
});

router.get('/alimentos2', function (req, res) {
    res.render('alimentos2');
});

module.exports = router;