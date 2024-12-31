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

// get single product
app.get("/products/:product_id", async (req, res) => {
    const productId = req.params.product_id
    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(productId)
        }
    })

    if (!product) {
        return res.status(400).send("Product not found")
    }
    res.send(product)
})

// create product
app.post('/products', async (req, res) => {
    // mengambil request melalui metode body
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

    // kalau mau pakai status code
    // res.status(201).send("create product success") 
})

// delete product
app.delete("/products/:product_id", async (req, res) => {
    // mengambil request melalui query params (bagian dari url)
    const productId = req.params.product_id
    await prisma.product.delete({
        where: {
            id: parseInt(productId)
        }
    })

    res.send({
        messsage: "product has deleted successfully"
    })
})

app.listen(PORT, () => {
    console.log(`Express API running in port : ${PORT}`)
})

// edit pake put
app.put("/products/:id", async (req, res) => {
    const productId = req.params.id
    const productData = req.body

    // validasi
    // komen kode ini untuk membuat fields opsional kembali
    // tetapi sebenarnya update itu memperbaruhi semua data
    if (!(productData.image && productData.name && productData.description && productData.price)) {
        return res.status(400).send("some fields are missing")
    }

    const product = await prisma.product.update({
        where: {
            id: parseInt(productId)
        },
        data: {
            name: productData.name,
            description: productData.description,
            price: productData.price,
            image: productData.image
        }
    })

    res.send({
        data: product,
        message: "edit product berhasil"
    })
})

// edit pake patch
// hanya memperbaruhi data yang kita masukan di dalam params
app.patch("/products/:id", async (req, res) => {
    const productId = req.params.id
    const productData = req.body

    const product = await prisma.product.update({
        where: {
            id: parseInt(productId)
        },
        data: {
            name: productData.name,
            description: productData.description,
            price: productData.price,
            image: productData.image
        }
    })

    res.send({
        data: product,
        message: "edit product berhasil"
    })
})