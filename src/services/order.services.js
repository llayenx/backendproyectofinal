const Order = require("../models/orders.models")

class orderServices{
    static async create(newOrder){
        try {
            const userCreated = await Order.create(newOrder)
            return userCreated
        } catch (error) {
            throw error
        }
    }

    static async getAll(){
        try {
            const result = await Order.findAll()
            return result
        } catch (error) {
            throw error
            
        }
    }

}

module.exports = orderServices