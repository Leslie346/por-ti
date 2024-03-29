const express = require('express');
const app = express();
const path = require('path');

// Rutas
let rutasEjercicios = require('./routes/ejercicios.js');
let rutasAlimentos = require('./routes/alimentos.js');
let rutasUsuarios = require('./routes/usuarios.js');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware.js');
const objetivoMiddleware = require('./middlewares/objetivoMiddleware.js');
//const mysql = require('mysql2');

app.use(cookieParser());

app.use(session({
    secret: "Mensaje secreto",
    resave: false,
    saveUninitialized: false
}));

app.use(userLoggedMiddleware);

// Sesión solo es vive mientras este abierto el navegador

// Cookies expiran en un determinado tiempo


// AQUI PRUEBA
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.urlencoded({ extended: false }));

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

let port = process.env.PORT || 3000;

//MySQL
//const connection = mysql.createConnection({
  //  host: 'us-cdbr-east-06.cleardb.net',
    //user: 'b979717129b0b4',
    //password: 'ff0d14cb',
   // database: 'heroku_4bf108387003295'
//});

//connection.connect(function(err){
  //  if(err) throw err;
   // console.log("connected");
//});


app.listen(port, ()=>{
    console.log(`App is running at the port ${port}`);
});


app.get('/', function(req, res){
    res.render('index'); 
});

app.get('/registro2', function(req, res){
    res.render('registro2'); 
});

app.get('/misobjetivos', function(req, res){
    res.render('objetivos');
});

app.get('/misejercicios', function(req, res){
    res.render('ejercicios');
});

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

    app.get('/loader', (req, res) => {
    res.render('loader');
        });

app.use('/ejercicios', rutasEjercicios);

app.use('/alimentos', rutasAlimentos);

app.use('/users', rutasUsuarios);

app.use(objetivoMiddleware);

// En function va la consecuencia que sucede cuando el usuario ingresa a la url