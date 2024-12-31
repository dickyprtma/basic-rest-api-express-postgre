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

// get products
app.get("/products", async (req, res) => {
    const products = await prisma.product.findMany()
    res.send(products)
})

app.post('/products', async (req, res) => {
    // melalui metode request body
    const newProductData = req.body;
    const product = await prisma.product.create(
        {
            data: {
                name: newProductData.name,
                description: newProductData.description,
                price: newProductData.price,
                image: newProductData.image
            }
        }
    )

    res.send({
        data: product,
        messsage: "create product success"
    })
    // res.status(201).send("create product success") kalau mau pakai status code
})

app.listen(PORT, () => {
    console.log(`Express API running in port : ${PORT}`)
})