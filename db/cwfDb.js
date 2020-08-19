const Sequelize = require('sequelize')
require('dotenv').config()

let sequelize
if (process.env.NODE_ENV === 'development') {
    sequelize = new Sequelize(process.env.DBUSERNAME, "postgres", process.env.DBPASSWORD, {
        dialect: "postgres", 
        host: "localhost", 
        port: 5432,
        storage: "./session.sqlite"
    })
}
else  {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: true
        },
        storage: "./session.sqlite"
    })
}


module.exports = sequelize