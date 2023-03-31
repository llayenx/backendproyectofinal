const cartServices = require("../services/cart.services")

const createCart = async(req, res, next)=>{
    try {
        const newCart = req.body
        await cartServices.create(newCart)
        res.status(200).json(newCart)
        
    } catch (error) {
        next(error)
    }
}

const getAllCarts= async(req, res, next)=>{
    try {
        const allUsers= await cartServices.getAll()
        res.json(allUsers)
        
    } catch (error) {
       next(error)
        
    }
}


module.exports = {
    createCart,
    getAllCarts,
}