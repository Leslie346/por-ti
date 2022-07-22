var sequelize = require('sequelize');

module.exports = function(sequelize, dataTypes) {

    var User = sequelize.define("User", {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        objetivo:{
            type: dataTypes.STRING
        }
    },
    {
        timestamps: false
    });
    
    return User;
}


