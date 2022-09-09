const { raw } = require("express");
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const User = require('../models/User');

const fs = require("fs");
const path = require("path");

// Variable para requerir modelos
//const db = require("../database/models");
const userModel = require('../database/models').User;
const { userInfo } = require("os");

const usersController = {

register: (req, res) => {
    return res.render('registro');
},

processRegister: async (req, res) => {

   const userInfo = req.body;
    // User.create(userToCreate);
    userModel.findOne({
        where: { email: userInfo.email }
    }).then( (userEmailValidation) =>{
        if(userEmailValidation){
        return res.render('registro', {
            errors: {
                 email: { msg: 'El correo ya se encuentra registrado' }
                }
            });
        }
    });

    const pass = userInfo.password;
    let newPass = pass.toString();

    const hashedPassword = await bcrypt.hash(newPass, 10);

        userModel.create( {
        id: userModel.id += 1,
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        email: userInfo.email,
        password: hashedPassword,
        objetivo: userInfo.objetivo
    })
    .then(() => {
        res.redirect('/users/login');
    })
    .catch(err => {
        res.status(500).render('error', {
            status: 500,
            title: 'ERROR',
            message: 'Error al crear usuario'
        });
        console.log(err);});
},
login: (req, res) => {
    return res.render('login');
},

processLogin: (req, res) => {
    userModel.findOne({where:{
        email: req.body.email
        }
    })
    .then((userToLogin) => {
        if (userToLogin) {
            let isOkThePassword = bcrypt.compare(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                console.log("USER LOGGEAD0")
                console.log(req.session.userLogged)
                console.log("///////////////////")
                return res.redirect('/users/misejercicios');
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'El e-mail no coincide con la contraseña'
                    }
                },oldData : req.body
            })
    }
        else {
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'E-mail no encontrado'
                    }
                },oldData: req.body
            })
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
    return res.render('perfilcopy', {
        user: req.session.userLogged
    });
},

logout: function(req, res){
    req.session.destroy();
    return res.redirect('/');
}

}

module.exports = usersController;