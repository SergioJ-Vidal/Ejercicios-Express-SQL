const db = require("../config/database")

const ProductController = {
    createProduct(req, res) {

        let sql = `INSERT INTO Products (title, description) values
        
        ('Bandera', 'Bandera Marruecos'),
        ('Mapa', 'De España');`;

        db.query(sql, (err, result) => {

            if (err) throw err;

            console.log(result);

            res.send("Product added...");

        });

    },
    selectProduct(req, res) {

        let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;

        db.query(sql, (err, result) => {

            if (err) throw err;

            res.send(result)

        })

    },
    productList(req, res) {

        let sql = 'SELECT * FROM products';

        db.query(sql, (err, result) => {

            if (err) throw err;

            res.send(result)

        })

    },
    descProduct(req, res) {

        let sql = `SELECT * FROM products ORDER BY id DESC`;

        db.query(sql, (err, result) => {

            if (err) throw err;

            res.send(result)

        })

    },
    findProductTitle(req, res) {

        let sql = 'CREATE DATABASE expressDB';

        db.query(sql, (err, result) => {

            if (err) throw err;

            console.log(result);

            res.send('Database created...')

        })

    },
    selectProductTitle(req, res) {

        let sql = `SELECT title FROM products WHERE title = "${req.params.title}"`;
    
        db.query(sql, (err, result) => {
    
            if (err) throw err;
    
            res.send(result)
    
        })
    
    },
    modifyProduct(req, res) {

        let newTitle = 'Mechero';
    
        let sql = `UPDATE Products SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    
        db.query(sql, (err, result) => {
    
            if (err) throw err;
    
            res.send('Post updated...')
    
        })
    
    },
    deleteProduct(req, res) {

        let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
    
        db.query(sql, (err, result) => {
    
            if (err) throw err;
    
            res.send('Post deleted')
    
        })
    
    }
}

module.exports = ProductController