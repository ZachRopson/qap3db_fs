-- Create the products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    quantity INT
);

-- Insert a new product
INSERT INTO products (name, description, price, quantity) 
VALUES ('Product1', 'Description1', 19.99, 100);

-- Select all products
SELECT * FROM products;

-- Update a product's price
UPDATE products 
SET price = 24.99 
WHERE id = 1;

-- Delete a product
DELETE FROM products 
WHERE id = 1;
