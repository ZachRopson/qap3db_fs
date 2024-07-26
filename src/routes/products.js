const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',  
    host: 'localhost',
    database: 'qap3db_fs',  
    password: 'postgres',  
    port: 5432,
});

// GET all products and render index.ejs
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.render('index', { products: result.rows });
    } catch (err) {
        res.status(500).send(err);
    }
});

// GET form to add new product and render add_product.ejs
router.get('/new', (req, res) => {
    console.log('Accessed /products/new route');
    res.render('add_product');
});

// POST a new product
router.post('/', async (req, res) => {
    const { name, description, price, quantity } = req.body;
    try {
        await pool.query(
            'INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4)',
            [name, description, price, quantity]
        );
        res.redirect('/products');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// GET form to edit a product and render edit_product.ejs
router.get('/:id/edit', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        res.render('edit_product', { product: result.rows[0] });
    } catch (err) {
        res.status(500).send(err);
    }
});

// PUT to update a product
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, quantity } = req.body;
    try {
        await pool.query(
            'UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5',
            [name, description, price, quantity, id]
        );
        res.redirect('/products');
    } catch (err) {
        res.status(500).send(err);
    }
});

// DELETE a product
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM products WHERE id = $1', [id]);
        res.redirect('/products');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
