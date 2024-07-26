-- CREATE TABLE
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    quantity INT
);

-- INSERT SAMPLE DATA
INSERT INTO products (name, description, price, quantity)
VALUES
('The Legend of Zelda: Breath of the Wild', 'An open-world action-adventure game set in the kingdom of Hyrule.', 59.99, 50),
('Animal Crossing: New Horizons', 'A life simulation game where you develop a deserted island into a community.', 49.99, 30),
('Super Mario Odyssey', 'A 3D platform game where Mario travels across various kingdoms to save Princess Peach.', 59.99, 40),
('The Witcher 3: Wild Hunt', 'An open-world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.', 39.99, 25),
('Red Dead Redemption 2', 'An epic tale of life in America''s unforgiving heartland, this game offers a vast and atmospheric world.', 59.99, 35),
('Cyberpunk 2077', 'An open-world action-adventure story set in Night City, a megalopolis obsessed with power, glamour, and body modification.', 49.99, 40),
('God of War', 'A third-person action-adventure game where Kratos and his son embark on a journey in the Norse wilds.', 29.99, 20),
('Horizon Zero Dawn', 'An action role-playing game set in a post-apocalyptic world overrun by robotic creatures.', 39.99, 30),
('Minecraft', 'A sandbox game where players can build and explore their own worlds made of blocks.', 26.95, 100),
('Fortnite', 'A battle royale game where players fight to be the last one standing.', 0.00, 200),
('Overwatch', 'A team-based multiplayer first-person shooter where players choose from a roster of heroes with unique abilities.', 19.99, 50),
('Grand Theft Auto V', 'An open-world action-adventure game set in the fictional state of San Andreas.', 29.99, 60),
('The Elder Scrolls V: Skyrim', 'An open-world action RPG set in the fantasy world of Tamriel.', 19.99, 45),
('Portal 2', 'A first-person puzzle-platform game where players solve puzzles using a portal gun.', 19.99, 20);

-- SELECT ALL PRODUCTS
SELECT * FROM products;

-- UPDATE A PRODUCT
UPDATE products SET price = 29.99 WHERE id = 1;

-- DELETE A PRODUCT
DELETE FROM products WHERE id = 1;

