const {DataTypes} = require("sequelize")

const db = require ("../utils/database")

const User = db.define("users", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING(30),
        allowNull:false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull:false,
      },
      password: {
        type: DataTypes.STRING(15),
        allowNull:false,
      },
      avatar: {
        type: DataTypes.STRING(50)
      },
     
    }

)

module.exports = User