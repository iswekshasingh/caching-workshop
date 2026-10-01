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

const {
    cacheMiddleware
} = require("../middleware/cacheMiddleware")

router.get("/products", cacheMiddleware, getProducts)

router.get("/products/:id", cacheMiddleware, getProduct)

router.post("/products", create)

router.put("/products/:id", update)

router.patch("/products/:id", patch)

router.delete("/products/:id", remove)

module.exports = router