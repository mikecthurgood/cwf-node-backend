const Sequelize = require('sequelize')
const sequelize = require('../db/cwfDb')

const Review = sequelize.define('review', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    authorName: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Review


