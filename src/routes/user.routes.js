const {Router} = require("express")
const {createUser}= require("../controllers/user.controllers")
const{updateUser}= require("../controllers/user.controllers")
const{getAllUsers} = require("../controllers/user.controllers")
const{createUserValidator} = require("../validators/users.validators")
const authenticate = require("../middleware/auth.middleware")
const router = Router()


router.post("/api/v1/users", createUserValidator, createUser)

router.put("/api/v1/users/:id", updateUser)

router.get("/api/v1/users", authenticate, getAllUsers)

module.exports = router