const db = require('./db');

const getAllProducts = async () => {
    const result = await db.query('SELECT * FROM products');
    return result.rows;
};

const getProductById = async (id) => {
    const result = await db.query('SELECT * FROM products WHERE id = $1', [id]);
    return result.rows[0];
};

const addProduct = async (name, description, price, quantity) => {
    const result = await db.query(
        'INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, description, price, quantity]
    );
    return result.rows[0];
};

const updateProduct = async (id, name, description, price, quantity) => {
    const result = await db.query(
        'UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5 RETURNING *',
        [name, description, price, quantity, id]
    );
    return result.rows[0];
};

const deleteProduct = async (id) => {
    await db.query('DELETE FROM products WHERE id = $1', [id]);
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
};
