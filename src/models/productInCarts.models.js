const {Datatypes} = require("sequelize")

const db = require ("../utils/database")

const ProductInCart = db.define("produtsInCarts", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
      },
      orderId: {
        type: Datatypes.INTEGER,
        allowNull:false,
        field:"order_Id",
        references:{
          model:"Orders",
          key : "id"

        }
      },
      productId: {
        type: Datatypes.INTEGER,
        allowNull:false,
        field:"product_Id",
      },
      quantity: {
        type: Datatypes.INTEGER,
        allowNull:false
      },
      price: {
        type: Datatypes.INTEGER,
        allowNull:false,
      
      },
      status: {
        type: Datatypes.STRING,
        defaultValue:"no-pagado"
      },
      createdAt: {
        allowNull: false,
        type: Datatypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Datatypes.DATE
      }
    });

    module.exports = ProductInCart