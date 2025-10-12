const dbConfig = require('../configs/db.config')
const {
    Sequelize, DataTypes
} = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operationsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
})

sequelize
    .authenticate()
    .then(() => {
        console.log("Database connected ...")
    })
    .catch((err) => {
        console.log("Error to connect DB " + err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./User.js')(sequelize, DataTypes);


module.exports = db