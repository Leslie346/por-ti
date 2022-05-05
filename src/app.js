const express = require('express');

// Rutas
let rutasEjercicios = require('./routes/ejercicios.js');
let rutasAlimentos = require('./routes/alimentos.js');
let rutasUsuarios = require('./routes/usuarios.js');


const path = require('path');

const app = express();

const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
let bcrypt = require('bcryptjs');

app.use(cookieParser());

app.use(session({secret: "Mensaje secreto"}))

// Sesión solo es vive mientras este abierto el navegador

// Cookies expiran en un determinado tiempo

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));




app.listen(3000, () => {
    console.log('Servidor corriendo')
});

app.get('/', function(req, res){
    res.render('index');
});

//app.get('/login', function(req, res){
  //  res.render('login');
//});

//app.get('/registro', function(req, res){
  // res.render('registro');
//});

app.get('/misobjetivos', function(req, res){
    res.render('objetivos');
});

app.get('/misejercicios', function(req, res){
    res.render('ejercicios');
});

//app.get('/miperfil', function(req, res){
  //  res.render('perfil');
//});

app.get('/listado', function(req, res){
    res.render('listado');
});

app.get('/ejerciciosfavoritos404', function(req, res){
    res.render('ejerciciosfavoritos404');
});

app.get('/ejerciciosrecientes404', function(req, res){
    res.render('ejerciciosrecientes404');
});

app.get('/scroll', function(req, res){
    res.render('scroll');
});

app.get('/404', (req, res) => {
    res.send('Error página no encontrada');
    });

app.use('/ejercicios', rutasEjercicios);

app.use('/alimentos', rutasAlimentos);

app.use('/users', rutasUsuarios);

// En function va la consecuencia que sucede cuando el usuario ingresa a la url