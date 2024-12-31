const express = require("express")
const dotenv = require("dotenv")
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()
const app = express()


dotenv.config()

const PORT = process.env.PORT

app.get("/api", (req, res) => {
    // kirim respon
    res.send("server memberikan respon dari endpoint /api ")
})

app.get("/products", async (req, res) => {
    const products = await prisma.product.findMany()
    res.send(products)
})

app.listen(PORT, () => {
    console.log(`Express API running in port : ${PORT}`)
})