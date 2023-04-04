const productServices = require("../services/product.services")

const createProduct = async(req, res, next)=>{
    try {
        const newProduct = req.body
        const result = await productServices.create(newProduct)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

const getAllProducts = async(req,res, next) =>{
    try {
      const allProducts = await productServices.getAll()
      res.json(allProducts)
      
    } catch (error) {
      next(error)
      
    }
  }

  const updateProduct =async(req,res, next) =>{
    try {
      const {id} = req.params
      const data = req.body
      await productServices.update(data,id)
      res.status(204).send()
    } catch (error) {
      res.status(400).json(error)
    }
  }

 /*  const getProductOfUser  = async(req,res, next) =>{
    try {
      const{id} = req.params
      const result = await productServices.getOneProductsUser(id)
      res.status(200).json(result)
    } catch (error) {
      next(error)
      
    }
  } */

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
   
}