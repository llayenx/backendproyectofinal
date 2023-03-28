const express = require ("express")

const PORT = 8000

const app = express()


app.get("/", (req, res)=>{
    res.send("hello World")
})

app.listen(PORT, ()=>{
    console.log("Servidor corriendo el puerto 8000")
})