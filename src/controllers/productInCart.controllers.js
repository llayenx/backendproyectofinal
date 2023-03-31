const productInCartServices = require("../services/productInCart.services")


const createProductInCart = async(req, res, next) =>{
    try {
        const newProductInCart = req.body
        const result = await productInCartServices.create(newProductInCart)
        res.status(200).json(result)
        
    } catch (error) {
      next (error) 
    }  
}
const getAllProductInCart= async(req, res, next)=>{
    try {
        const allProductsInCart= await productInCartServices.getAll()
        res.json(allProductsInCart)
        
    } catch (error) {
       next(error)
        
    }
}



module.exports = {
    createProductInCart,
    getAllProductInCart
}