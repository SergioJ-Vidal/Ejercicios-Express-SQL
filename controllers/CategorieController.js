const db = require("../config/database")

const CategorieController = {
    createCategorie(req, res) {

        let sql = `INSERT INTO Categories (Categorie) values
    
        ('Cocina'),
        ('Aseo');`;

        db.query(sql, (err, result) => {

            if (err) throw err;

            console.log(result);

            res.send("Categorie added...");

        });

    },
    modifyCategorie(req, res) {

        let newTitle = 'Reparación';
    
        let sql = `UPDATE Categories SET categorie = '${newTitle}' WHERE id = ${req.params.id}`;
    
        db.query(sql, (err, result) => {
    
            if (err) throw err;
    
            res.send('Post updated...')
    
        })
    
    },
    categoriesList(req, res) {

        let sql = 'SELECT * FROM categories';
    
        db.query(sql, (err, result) => {
    
            if (err) throw err;
    
            res.send(result)
    
        })
    
    },
    selectCategorie(req, res) {

        let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
    
        db.query(sql, (err, result) => {
    
            if (err) throw err;
    
            res.send(result)
    
        })
    
    }
}

module.exports = CategorieController