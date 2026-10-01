const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../services/productService")

const {
    setCache,
    clearCache
} = require("../middleware/cacheMiddleware")


async function getProducts(req, res) {
    try {
        const products = await getAllProducts()

        setCache(req.url, products)

        res.json(products)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Something went wrong"
        })
    }
}


async function getProduct(req, res) {
    try {
        const id = Number(req.params.id)

        const product = await getProductById(id)

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        setCache(req.url, product)

        res.json(product)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Something went wrong"
        })
    }
}


async function create(req, res) {
    try {
        const product = await createProduct(req.body)

        clearCache()

        res.status(201).json(product)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Something went wrong"
        })
    }
}


async function update(req, res) {
    try {
        const id = Number(req.params.id)

        const product = await updateProduct(id, req.body)

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        clearCache()

        res.json(product)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Something went wrong"
        })
    }
}


async function patch(req, res) {
    try {
        const id = Number(req.params.id)

        const product = await updateProduct(id, req.body)

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        clearCache()

        res.json(product)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Something went wrong"
        })
    }
}


async function remove(req, res) {
    try {
        const id = Number(req.params.id)

        const product = await deleteProduct(id)

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        clearCache()

        res.json({
            message: "Product deleted",
            product
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Something went wrong"
        })
    }
}


module.exports = {
    getProducts,
    getProduct,
    create,
    update,
    patch,
    remove
}
