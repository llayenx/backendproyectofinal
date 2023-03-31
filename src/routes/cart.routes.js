const {Router}=  require("express")
const{createCart, getAllCarts} = require("../controllers/cart.controllers")
const router = Router ()

router.post("/api/v1/carts", createCart)
router.get("/api/v1/carts", getAllCarts)

module.exports = router