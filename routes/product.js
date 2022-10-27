const express = require("express")
const router = express.Router()
const db = require("../config/database")

router.post("/createProduct", (req, res) => {

    let sql = `INSERT INTO Products (title, description) values
    
    ('Bandera', 'Bandera Marruecos'),
    ('Mapa', 'De España');`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send("Product added...");

    });

});

router.get('/select/id/:id', (req, res) => {

    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        res.send(result)

    })

})

router.get('/productlist', (req, res) => {

    let sql = 'SELECT * FROM products';

    db.query(sql, (err, result) => {

        if (err) throw err;

        res.send(result)

    })

})

router.get('/order/desc', (req, res) => {

    let sql = `SELECT * FROM products ORDER BY id DESC`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        res.send(result)

    })

})

router.get('/title/:title', (req, res) => {

    let sql = `SELECT title FROM products WHERE title = "${req.params.title}"`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        res.send(result)

    })

})

router.put('/modify/id/:id', (req, res) => {

    let newTitle = 'Mechero';

    let newDescription = 'Crema hidratante'

    let sql = `UPDATE Products SET title = '${newTitle}' WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        res.send('Post updated...')

    })

})

router.delete('/delete/id/:id', (req, res) => {

    let sql = `DELETE FROM products WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        res.send('Post deleted')

    })

})

module.exports = router;