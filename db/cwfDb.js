const Sequelize = require('sequelize')
// const sequelize = new Sequelize("CWF", "postgres", "Commenc4ly3t1!", {
//     dialect: "postgres", 
//     host: "localhost", 
//     port: 5432,
//     storage: "./session.sqlite"
// })
const sequelize = new Sequelize(process.env.DATABASE_URL)

module.exports = sequelize