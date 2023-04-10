const {Router} = require("express")
const {createProductInCart, getAllProductInCart} = require("../controllers/productInCart.controllers")
const { createProductInCartValidator } = require("../validators/productInCarts.validators")
const router = Router()

router.post("/api/v1/productsincarts", createProductInCartValidator,createProductInCart)
router.get("/api/v1/productsincarts", getAllProductInCart)






module.exports = router