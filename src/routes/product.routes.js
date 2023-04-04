const {Router} = require("express")
const {createProduct, getAllProducts, updateProduct,getProductById} = require("../controllers/product.controllers")
const router = Router()

router.post("/api/v1/products", createProduct)
router.get("/api/v1/products", getAllProducts)
router.put("/api/v1/products/:id", updateProduct)
router.get("/api/v1/products/carts/:id", getProductById)

module.exports = router