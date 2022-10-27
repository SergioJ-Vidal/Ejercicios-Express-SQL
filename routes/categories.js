const express = require("express")
const router = express.Router()
const db = require("../config/database")

router.post("/createCategorie", (req, res) => {

    let sql = `INSERT INTO Categories (Categorie) values

    ('Cocina'),
    ('Aseo');`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send("Categorie added...");

    });

});

router.put('/modify/id/:id', (req, res) => {

    let newTitle = 'Reparación';

    let newDescription = 'Crema hidratante'

    let sql = `UPDATE Categories SET categorie = '${newTitle}' WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        res.send('Post updated...')

    })

})

router.get('/categorieslist', (req, res) => {

    let sql = 'SELECT * FROM categories';

    db.query(sql, (err, result) => {

        if (err) throw err;

        res.send(result)

    })

})

router.get('/select/id/:id', (req, res) => {

    let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        res.send(result)

    })

})

module.exports = router;