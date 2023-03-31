const {Router} = require("express")
const {createProductInCart, getAllProductInCart} = require("../controllers/productInCart.controllers")
const router = Router()

router.post("/api/v1/productsincarts", createProductInCart)
router.get("/api/v1/productsincarts", getAllProductInCart)






module.exports = router