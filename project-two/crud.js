const Sequelize = require('sequelize');

const dataBase = require('./db');

const crud = dataBase.define('Crud', {

    Id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    DateCreated:{
        type: Sequelize.DATE,
        allowNull: false
    }
});