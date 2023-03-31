const {DataTypes} = require("sequelize")

const db = require ("../utils/database")

const ProductInOrder = db.define("produtsInOrders", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field: "order_id",
        
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"product_id",
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      status: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:"disponible"
      },
    
    });

    module.exports = ProductInOrder