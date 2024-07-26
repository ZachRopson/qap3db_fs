- As a user, I can update game details and display back on the products page.

### Steps:

1. Navigate to `http://localhost:3000/products`.
2. Click the "Edit" link next to the product "Portal 2".
3. Update the details to:
   - **Name:** Portal 2
   - **Description:** A classic puzzle-platform game.
   - **Price:** 18.99
   - **Quantity:** 25
4. Click the "Update Product" button.

### Expected Result:

- The product "Portal 2" should be updated in the database with the new details.
- The updated product should appear in the list at `http://localhost:3000/products`.
