const Cart = require("../models/carts.models")

class cartServices{
    static async create(newCart){
        try {
            const cartCreated = await Cart.create(newCart)
            return(cartCreated)
        } catch (error) {
            throw error
        }
    }

    static async getAll() {
        try {
            const result = await Cart.findAll()
            return result
        } catch (error) {
            throw (error)
        }
    }
}

module.exports = cartServices