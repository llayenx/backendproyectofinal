const{Router} = require("express")
const {createOrder, getAllOrders,getOrdersUser} = require("../controllers/order.controllers")
const router = Router()

router.post("/api/v1/orders", createOrder)
router.get("/api/v1/orders", getAllOrders)
router.get("/api/v1/orders/:id", getOrdersUser)

module.exports = router