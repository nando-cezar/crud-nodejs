const Sequelize = require('sequelize');

const componentSequelize = new Sequelize('dbCrud', 'root', '1234', {

    dialect:'mysql', host:'localhost', port:'3306'
});

module.exports = componentSequelize;