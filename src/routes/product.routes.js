const {Router} = require("express")
const {createProduct, getAllProducts, updateProduct} = require("../controllers/product.controllers")
const router = Router()

router.post("/api/v1/products", createProduct)
router.get("/api/v1/products", getAllProducts)
router.put("/api/v1/products/:id", updateProduct)

module.exports = router