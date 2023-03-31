const ProductInCart = require("../models/productInCarts.models")

class productInCartServices{
    static async create(newProductInCart){
        try {
    
            const productInCartCreated = await ProductInCart.create(newProductInCart)
            return productInCartCreated
        } catch (error) {
            throw error
        
        }
    }


    static async getAll() {
        try {
            const result = await ProductInCart.findAll()
            return result
        } catch (error) {
            throw (error)
        }
    }


}

module.exports = productInCartServices