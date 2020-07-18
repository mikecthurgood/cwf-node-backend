const Sequelize = require('sequelize')
const sequelize = require('../db/cwfDb')

const Wall = sequelize.define('wall', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    weekdayOpening: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weekdayClosing: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weekendOpening: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weekendClosing: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    openingNotes: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    websiteUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    boulderingOnly: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    addressLine1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addressLine2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addressLine3: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    region: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postcode: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Wall
