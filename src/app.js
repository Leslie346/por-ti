
// Rutas
let rutasEjercicios = require('./routes/ejercicios.js');
let rutasAlimentos = require('./routes/alimentos.js');
let rutasUsuarios = require('./routes/usuarios.js');


const path = require('path');

const app = express();

const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware.js');


app.use(cookieParser());

app.use(session({
    secret: "Mensaje secreto",
    resave: false,
    saveUninitialized: false
}));

app.use(userLoggedMiddleware);

// Sesión solo es vive mientras este abierto el navegador

// Cookies expiran en un determinado tiempo

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.urlencoded({ extended: false }));

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

let port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`App is running at the port ${port}`);
});

app.get('/', function(req, res){
    res.render('index'); 
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

// En function va la consecuencia que sucede cuando el usuario ingresa a la url