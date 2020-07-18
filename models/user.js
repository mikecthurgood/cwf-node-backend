const Sequelize = require('sequelize')
const sequelize = require('../db/cwfDb')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull:false
    },
    isAdmin: Sequelize.BOOLEAN,
    resetToken: Sequelize.STRING,
    resetTokenExpiration: Sequelize.DATE,
})

module.exports = User
