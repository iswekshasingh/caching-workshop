const {
    readDB,
    readDBDelay,
    writeDB
} = require("../database/productDB")

async function getAllProducts() {
    return await readDBDelay()
}

async function getProductById(id) {
    const products = await readDBDelay()

    return products.find(product => product.id === id)
}

async function createProduct(data) {
    const products = await readDB()

    const newId = products.length > 0
        ? Math.max(...products.map(product => product.id)) + 1
        : 1

    const product = {
        id: newId,
        name: data.name,
        price: data.price
    }

    products.push(product)

    await writeDB(products)

    return product
}

async function updateProduct(id, data) {
    const products = await readDB()

    const product = products.find(product => product.id === id)

    if (!product) {
        return null
    }

    product.name = data.name ?? product.name
    product.price = data.price ?? product.price

    await writeDB(products)

    return product
}

async function deleteProduct(id) {
    const products = await readDB()

    const index = products.findIndex(product => product.id === id)

    if (index === -1) {
        return null
    }

    const deletedProduct = products.splice(index, 1)[0]

    await writeDB(products)

    return deletedProduct
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}