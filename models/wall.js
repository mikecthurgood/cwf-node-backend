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
        type: Sequelize.STRING,
        allowNull: false
    },
    weekdayClosing: {
        type: Sequelize.STRING,
        allowNull: false
    },
    weekendOpening: {
        type: Sequelize.STRING,
        allowNull: false
    },
    weekendClosing: {
        type: Sequelize.STRING,
        allowNull: false
    },
    openingNotes: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    websiteUrl: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.TEXT,
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
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    auto: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    top: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    lead: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    gym: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    cafe: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
})

module.exports = Wall
