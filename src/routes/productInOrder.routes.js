const {Router} = require("express")
const {createProductInOrder,getAllProductInOrder} = require("../controllers/productInOrder.controllers")
const { createProductInOrdersValidator } = require("../validators/productsInOrders.validators")
const router = Router()

router.post("/api/v1/productsinorders",createProductInOrdersValidator, createProductInOrder)
router.get("/api/v1/productsinorders", getAllProductInOrder)






module.exports = router