const {Router} = require("express")
const {createProductInOrder,getAllProductInOrder} = require("../controllers/productInOrder.controllers")
const router = Router()

router.post("/api/v1/productsinorders", createProductInOrder)
router.get("/api/v1/productsinorders", getAllProductInOrder)






module.exports = router