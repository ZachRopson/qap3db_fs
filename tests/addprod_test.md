- As a user, I can add a new game and its info to the database through a web form.

## Test Case 1: Create a New Product

### Steps:

1. Navigate to `http://localhost:3000/products/new`.
2. Fill out the form with the following details:
   - **Name:** Portal 2
   - **Description:** A first-person puzzle-platform game where players solve puzzles using a portal gun.
   - **Price:** 19.99
   - **Quantity:** 20
3. Click the "Add Product" button.

### Expected Result:

- The new product "Portal 2" should be added to the database.
- The product should appear in the list at `http://localhost:3000/products`.
