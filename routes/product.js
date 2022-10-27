const express = require("express")
const router = express.Router()
const db = require("../config/database")
const ProductController = require("../controllers/ProductController")

router.post("/createProduct", ProductController.createProduct)

router.get('/select/id/:id', ProductController.selectProduct)

router.get('/productlist', ProductController.productList)

router.get('/order/desc', ProductController.descProduct)

router.get('/title/:title', ProductController.findProductTitle)

router.put('/modify/id/:id', ProductController.modifyProduct)

router.delete('/delete/id/:id', ProductController.deleteProduct)

module.exports = router;