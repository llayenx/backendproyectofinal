const jwt = require("jsonwebtoken")

  const authenticate = (req, res, next) =>{
    const token = req.headers["access-token"]

    if(!token){
        return next({
            status: 401,
            error : "unauthorized",
            message: "not token providen"
        })
    }
    try {
        const decoded = jwt.verify(token,  "LayenxLaventure", { algoritms:"HS512"})
        req.user = decoded
        next()
    } catch (error) {
      res.status(400).json(error)  
    }
  }
  module.exports = authenticate