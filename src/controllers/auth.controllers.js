const userServices = require("../services/user.services")
const AuthServices = require ("../services/auth.services")
const bcrypt = require("bcrypt")

const userLogin = async(req, res, next) =>{
    try {
        const{email, password} = req.body
         const user = await userServices.getUser(email)
          if(!user){
            return next({
                status: 400,
                message: "email not found",
                errorName: "User not found"
            })
          }
          const isValidPassword = await bcrypt.compare(password, user.password)
          if(!isValidPassword){
            return next({
                status: 400,
                message: "Email does not match with that password",
                errorName: "Invalid password"
            })
          }
          const{id, username, avatar} = user
         const token = AuthServices.genToken({id, username, avatar})
          res.json ({id, username, email, avatar, token})
          //token
    } catch (error) {
           next (error)
    }

}

module.exports = {
    userLogin,
}