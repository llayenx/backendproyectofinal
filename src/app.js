const express = require ("express")
const db = require("./utils/database")
const initModels = require("./models/initModels")
const cors = require("cors")
const morgan = require ("morgan")
require("dotenv").config()
const swaggerUi = require("swagger-ui-express") 
const swaggerDoc = require("../swagger.json")
const userRoutes = require("./routes/user.routes")
const authRoutes = require("./routes/auth.routes")
const errorHandlerRoute = require("./routes/errorHandler.routes")
const transporter = require("./utils/mailer")
const productRoutes = require("./routes/product.routes")
const orderRoutes = require ("./routes/order.routes")
const cartRoutes = require ("./routes/cart.routes")
const productInCart = require("./routes/productInCart.routes")
const ProductInOrder = require("./routes/productInOrder.routes")
const { eventNames } = require("./utils/mailer")


const PORT = process.env.PORT || 8000


initModels()

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

db.authenticate()
.then(()=>{
    console.log("Conexion DB")
})
.catch((error)=> console.log(error))

db.sync({alter:true})
.then(()=> console.log("base de datos syncronizada"))
.catch((error) => console.log(error))



app.get("/", (req, res)=>{
    res.send("Welcome to my e-commerce =====> https://backendproyectofinal-api.onrender.com/api/v1/docs/ ")
})

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(userRoutes)
app.use(authRoutes)
app.use(productRoutes)
app.use(orderRoutes)
app.use(cartRoutes)
app.use(productInCart)
app.use(ProductInOrder)


errorHandlerRoute(app)

app.listen(PORT, ()=>{
    console.log("Servidor corriendo el puerto 8000")
})