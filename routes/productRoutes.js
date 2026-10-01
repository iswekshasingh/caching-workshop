const express = require("express")

const router = express.Router()

const {
    getProducts,
    getProduct,
    create,
    update,
    patch,
    remove
} = require("../controllers/productController")

router.get("/products", getProducts)

router.get("/products/:id", getProduct)

router.post("/products", create)

router.put("/products/:id", update)

router.patch("/products/:id", patch)

router.delete("/products/:id", remove)

module.exports = router