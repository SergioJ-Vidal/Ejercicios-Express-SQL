const express = require("express");

const app = express();

const db = require('./config/database.js');

const PORT = 3000;

app.use(express.json())


app.get('/createdb', (req, res) => {

    let sql = 'CREATE DATABASE expressDB';

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send('Database created...')

    })

})

app.get('/createtableProducts', (req, res) => {

    let sql = 'CREATE TABLE Products (id int AUTO_INCREMENT,title VARCHAR(255), Description VARCHAR(255), PRIMARY KEY(id))'

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send('Products table created...')

    })

})


app.get('/createtableCategories', (req, res) => {

    let sql = 'CREATE TABLE Categories (id int AUTO_INCREMENT, Categorie VARCHAR(255), PRIMARY KEY(id))'

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send('Posts table created...')

    })

})


app.post("/createProduct", (req, res) => {

    let sql = `INSERT INTO Products (title, description) values
    
    ('Bandera', 'Bandera Marruecos'),
    ('Mapa', 'De España');`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send("Product added...");

    });

});


app.post("/createCategorie", (req, res) => {

    let sql = `INSERT INTO Categories (Categorie) values

    ('Cocina'),
    ('Aseo');`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send("Categorie added...");

    });

});

app.put('/products/id/:id', (req, res) => {

    let newTitle = 'Cepillo';

    let newDescription = 'Crema hidratante'

    let sql = `UPDATE Products SET title = '${newTitle}' WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        res.send('Post updated...')

    })

})

app.put('/categories/id/:id', (req, res) => {

    let newTitle = 'Reparación';

    let newDescription = 'Crema hidratante'

    let sql = `UPDATE Categories SET categorie = '${newTitle}' WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        res.send('Post updated...')

    })

})

//Crea un endpoint donde puedas seleccionar un producto por id

app.get('/products/id/:id',(req,res)=>{

    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
    
    db.query(sql,(err,result)=> {
    
    if(err) throw err;
    
    res.send(result)
    
    })
    
    })


//Crea un endpoint que muestre todos los productos

app.get('/productlist',(req,res)=> {

    let sql = 'SELECT * FROM products';
    
    db.query(sql,(err,result)=> {
    
    if(err) throw err;
    
    res.send(result)
    
    })
    
    })

//Crea un endpoint que muestre todas las categorías

app.get('/categorieslist',(req,res)=> {

    let sql = 'SELECT * FROM categories';
    
    db.query(sql,(err,result)=> {
    
    if(err) throw err;
    
    res.send(result)
    
    })
    
    })

//Crea un endpoint que muestre de forma descendente los productos.

app.get('/products/desc',(req,res)=>{

    let sql = `SELECT * FROM products ORDER BY id DESC`;
    
    db.query(sql,(err,result)=> {
    
    if(err) throw err;
    
    res.send(result)
    
    })
    
    })

//Crea un endpoint donde puedas seleccionar una categoría por id

app.get('/categories/id/:id',(req,res)=>{

    let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
    
    db.query(sql,(err,result)=> {
    
    if(err) throw err;
    
    res.send(result)
    
    })
    
    })

//Crea un endpoint donde puedas buscar un producto por su nombre

app.get('/products/title/:title',(req,res)=>{

    let sql = `SELECT title FROM products WHERE title = "${req.params.title}"`;
    
    db.query(sql,(err,result)=> {
    
    if(err) throw err;
    
    res.send(result)
    
    })
    
    })


//Crea un endpoint que muestra todos los productos con sus categorías   

app.get('/merged',(req,res)=>{

    let sql = `SELECT * FROM products INNER JOIN categories ON products.id = categories.id;`;
    
    db.query(sql,(err,result)=> {
    
    if(err) throw err;
    
    res.send(result)
    
    })
    
    })

//Crea un endpoint donde puedas eliminar un producto por su id

app.delete('/delete/id/:id',(req,res)=>{

    let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
    
    db.query(sql, (err,result)=> {
    
    if(err) throw err;
    
    res.send('Post deleted')
    
    })
    
    })

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));