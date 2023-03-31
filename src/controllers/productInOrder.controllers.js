const productInOrderServices = require("../services/productInOrder.services")


const createProductInOrder = async(req, res, next) =>{
    try {
        const newProductInOrder = req.body
        const result = await productInOrderServices.create(newProductInOrder)
        res.status(200).json(result)
        
    } catch (error) {
      next (error) 
    }  
}
const getAllProductInOrder= async(req, res, next)=>{
    try {
        const allProductsInOrder= await productInOrderServices.getAll()
        res.json(allProductsInOrder)
        
    } catch (error) {
       next(error)
        
    }
}



module.exports = {
    createProductInOrder,
    getAllProductInOrder
}