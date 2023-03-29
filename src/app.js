const express = require ("express")
const db = require("./utils/database")
const initModels = require("./models/initModels")
const cors = require("cors")
const morgan = require ("morgan")
const userRoutes = require("./routes/user.routes")
const errorHandlerRoute = require("./routes/errorHandler.routes")

const PORT = 8000

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
    res.send("hello World")
})

app.use(userRoutes)


errorHandlerRoute(app)

app.listen(PORT, ()=>{
    console.log("Servidor corriendo el puerto 8000")
})