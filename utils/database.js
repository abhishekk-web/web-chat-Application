const Sequelize = require('sequelize');

const sequelize = new Sequelize('chat-application', 'root', 'nodecomplete', {
    dialect: "mysql",
    host: 'localhost'
})

module.exports = sequelize;