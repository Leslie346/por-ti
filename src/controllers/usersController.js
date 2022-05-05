const { raw } = require("express");
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
    users.push({
        id: users.length + 1,
        ...userInfo
    });

    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.redirect("/");
    console.log(userInfo)
},

login: (req, res) => {
    return res.render('login');
},

create: function(req, res, next){
    let errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.render('registro', 
        { mensajesDeError: errores.mapped() })
    }
},
profile: function(req, res){
    return res.render('perfil');
}
}

module.exports = usersController;