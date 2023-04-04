const ProductInCart = require("../models/productInCarts.models")
const Product = require("../models/products.models")
const User = require("../models/users.models")


class productServices{
    static async create(newProduct){
        try {
            const productcreated= await Product.create(newProduct)
            return productcreated
        } catch (error) {
           throw error
        }
    }
    static async getAll(){
        try {
            const result = await Product.findAll({
                include :
                    {
                        model : User,
                        attributes:["username"]
                    }
                
            }

            )
            return result
        } catch (error) {
            throw error
            
        }
    }

    static async update(data,id){
        try {
            const updateProduct = await Product.update(data,{
                where:{id}
            })
            return updateProduct
            
        } catch (error) {
            throw error
        }
}
/* static async getOneProductsUser(id){
    try {
        const result =await Product.findByPk(id,{
            attributes:["userId"],
            include:[{
                model:ProductInCart,
                attributes:["productId, cartId"]

            }]
        })
        return result
        
    } catch (error) {
        throw error
        
    }
} */
}

module.exports = productServices