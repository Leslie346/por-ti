const { raw } = require("express");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../models/User');

const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));


const usersController = {

register: (req, res) => {
    return res.render('registro');
},

processRegister: (req, res) => {
    const userInfo = req.body;

    let userInDB = User.findByField('email', userInfo.email);

    if(userInDB){
        return res.render('registro', {
            errors: {
            email: {
                msg: 'Este e-mail ya está registrado'
            }
            },
            oldData: req.body
        });
    }

    else {

    users.push({
        id: users.length + 1,
        ...userInfo,
    })


   // let userToCreate = {
     //   id: users.length + 1,
       // ...userInfo,
       // avatar: req.file.filename
       //password: bcryptjs.hashSync(userInfo.password, 10)
   // }

    // User.create(userToCreate);

    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.redirect("/users/login");
    console.log(userInfo)
}
},

login: (req, res) => {
    return res.render('login');
},

processLogin: (req, res) => {
    let userToLogin = User.findByField('email', req.body.email);
    
    if(userToLogin) {
        delete userToLogin.password;
        delete userToLogin.confirm_password;
        req.session.userLogged = userToLogin;
        return res.redirect('/users/miperfil');
        return res.render('login', {
            errors: {
                password: {
                    msg: 'Contraseña incorrecta'
                }
            }
        }) 
    }
    return res.render('login', {
        errors: {
            email: {
                msg: 'E-mail no encontrado'
            }
        }
    })
},

create: function(req, res, next){
    let errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.render('registro', 
        { mensajesDeError: errores.mapped() })
    }
},

profile: function(req, res){
    return res.render('perfil', {
        user: req.session.userLogged
    });
},

logout: function(req, res){
    req.session.destroy();
    return res.redirect('/');
}

}

module.exports = usersController;