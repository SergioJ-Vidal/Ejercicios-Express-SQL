const express = require("express");

const app = express();

const db = require('./config/database.js');

const PORT = 3000;

app.use(express.json())

app.use("/products", require("./routes/product"))
app.use("/categories", require("./routes/categories"))


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

//No sé donde meter esta al trabajar con las 2 tablas, no sé si tiene preferencia la carpeta de from sobre la otra.

app.get('/merged',(req,res)=>{

    let sql = `SELECT * FROM products INNER JOIN categories ON products.id = categories.id;`;
    
    db.query(sql,(err,result)=> {
    
    if(err) throw err;
    
    res.send(result)
    
    })
    
    })

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));