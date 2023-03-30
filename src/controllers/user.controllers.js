const userServices= require("../services/user.services")
const transporter = require("../utils/mailer")

const createUser = async(req,res,next) =>{
    try {
        const newUser = req.body
        const result = await userServices.create(newUser)
        res.status(200).json(result)
           await transporter.sendMail({
              from: "llayenx@gmail.com",
              to : result.email,
              subject: "Ultimo proyecto final de BE en Academlo",
              html: "<h1> Bienvenido al EcommerceApi </h1>"
          })
    
      } catch (error) {
         next(error)
        
    }
}

const updateUser =async(req,res, next) =>{
  try {
    const {id} = req.params
    const data = req.body
    await userServices.update(data,id)
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error)
  }
}

const getAllUsers = async(req,res, next) =>{
  try {
    const allUsers = await userServices.getAll()
    res.json(allUsers)
    
  } catch (error) {
    next(error)
    
  }
}
module.exports = {
    createUser,
    updateUser,
    getAllUsers
}