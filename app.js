const express = require('express');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.listen(3000, () => {
    console.log('Servidor corriendo')
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/registro', function(req, res){
    res.sendFile(path.join(__dirname, './views/registro.html'));
});

app.get('/misobjetivos', function(req, res){
    res.sendFile(path.join(__dirname, './views/objetivos.html'));
});

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, './views/index copy.html'));
});

app.get('/misejercicios', function(req, res){
    res.sendFile(path.join(__dirname, './views/ejercicios.html'));
});

app.get('/miperfil', function(req, res){
    res.sendFile(path.join(__dirname, './views/perfil.html'));
});

app.get('/404', (req, res) => {
    res.send('Error página no encontrada');
    });

// En function va la consecuencia que sucede cuando el usuario ingresa a la url