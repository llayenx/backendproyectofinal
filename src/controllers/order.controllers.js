
const orderServices = require("../services/order.services")


const createOrder = async(req, res, next)=>{
   try {
    const newOrder = req.body
    const result = await orderServices.create(newOrder)
res.status(200).json(result)
   } catch (error) {
    next(error)
   }
}

const getAllOrders = async(req,res, next) =>{
    try {
      const allOrders = await orderServices.getAll()
      res.json(allOrders)
      
    } catch (error) {
      next(error)
      
    }
  }

  const getOrdersUser = async(req, res, next) => {
   try {
    const{id}= req.params
    const result = await orderServices.getOneOrder(id)
    res.status(200).json(result)
    
  } catch (error) {
    next(error)
   }
  }

module.exports={
    createOrder,
    getAllOrders,
    getOrdersUser
}