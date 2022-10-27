const express = require("express")
const router = express.Router()
const db = require("../config/database")
const CategorieController = require("../controllers/CategorieController")

router.post("/createCategorie", CategorieController.createCategorie)

router.put('/modify/id/:id', CategorieController.modifyCategorie)

router.get('/categorieslist', CategorieController.categoriesList)

router.get('/select/id/:id', CategorieController.selectCategorie)

module.exports = router;