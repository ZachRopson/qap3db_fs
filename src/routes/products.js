const express = require('express');
const router = express.Router();
const productDAL = require('../dal/products');

// GET all products and render index.ejs
router.get('/', async (req, res) => {
    try {
        const products = await productDAL.getAllProducts();
        res.render('index', { products });
    } catch (err) {
        res.status(500).send(err);
    }
});

// GET form to add new product and render add_product.ejs
router.get('/new', (req, res) => {
    res.render('add_product');
});

// POST a new product
router.post('/', async (req, res) => {
    const { name, description, price, quantity } = req.body;
    try {
        await productDAL.addProduct(name, description, price, quantity);
        res.redirect('/products');
    } catch (err) {
        res.status(500).send(err);
    }
});

// GET form to edit a product and render edit_product.ejs
router.get('/:id/edit', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productDAL.getProductById(id);
        res.render('edit_product', { product });
    } catch (err) {
        res.status(500).send(err);
    }
});

// PUT to update a product
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, quantity } = req.body;
    try {
        await productDAL.updateProduct(id, name, description, price, quantity);
        res.redirect('/products');
    } catch (err) {
        res.status(500).send(err);
    }
});

// DELETE a product
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await productDAL.deleteProduct(id);
        res.redirect('/products');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;

