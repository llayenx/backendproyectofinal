const {Sequelize} = require("sequelize")

const db = new Sequelize({
    database : "backendproyectofinal", 
    host : "localhost",
    port : "5433",
    username : "postgres",
    password : "931105",
    dialect : "postgres",
    logging : false
})

module.exports = db