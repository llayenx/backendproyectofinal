const Cart = require("../models/carts.models")
const ProductInCart = require("../models/productInCarts.models")
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
// uso este controlador sin servicio importando los modelos necesarios
const addProductToCart = async(req, res, next)=>{
    try {
        const {cartId, productId, quantity, price}= req.body
        await ProductInCart.create({cartId, productId, quantity, price})
        const totalPrice = price * quantity
        await Cart.increment({totalPrice}, {where :{id: cartId}})
        res.json({
            message: "product added"
        })
    } catch (error) {
        next(error)
        
    }
}


module.exports = {
    createCart,
    getAllCarts,
    addProductToCart
}