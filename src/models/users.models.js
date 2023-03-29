const {DataTypes} = require("sequelize")
const bcrypt = require("bcrypt")
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
        unique:true
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull:false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull:false,
      },
      avatar: {
        type: DataTypes.STRING(50)
      },
     
    },{
    hooks:{
      beforeCreate : async(user) =>{
        try {
          const salt = await bcrypt.genSalt(10)
          const passwordHash = await bcrypt.hash(user.password, salt)
          user.password = passwordHash
        } catch (error) {
          throw error
        }
      }
    }

    }

)

module.exports = User