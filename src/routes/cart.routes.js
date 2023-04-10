const {Router}=  require("express")
const{createCart, getAllCarts, addProductToCart} = require("../controllers/cart.controllers")
const{createCartValidator} = require("../validators/carts.validators")
const router = Router ()

router.post("/api/v1/carts", createCartValidator, createCart)
router.get("/api/v1/carts", getAllCarts)
router.post("/api/v1/carts/add-product", addProductToCart)

module.exports = router