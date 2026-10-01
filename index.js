const express = require("express")

const productRoutes = require("./routes/productRoutes")

const app = express()

app.use(express.json())

app.use(productRoutes)

app.listen(7001, () => {
    console.log("Listening on port 7001")
})