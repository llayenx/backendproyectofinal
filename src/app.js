const express = require ("express")
const db = require("./utils/database")

const PORT = 8000

const app = express()

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

app.listen(PORT, ()=>{
    console.log("Servidor corriendo el puerto 8000")
})