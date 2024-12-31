const express = require("express")
const dotenv = require("dotenv")
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()
const app = express()

dotenv.config()

const PORT = process.env.PORT

// agar bisa parse json body (untuk create dsb)
app.use(express.json())

app.get("/api", (req, res) => {
    // kirim respon
    res.send("server memberikan respon dari endpoint /api ")
})

const productController = require("./product/product.controller")
app.use("/products", productController)

app.listen(PORT, () => {
    console.log(`Express API running in port : ${PORT}`)
})