const express = require('express');
const router = express.Router();
const pool = require('../../server/db');


 // show
router.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});
 // Add
router.post('/products', async (req, res) => {
  const { title, price, image, category, color } = req.body;
  try {
    await pool.query(
      'INSERT INTO products (title, price, image, category, color) VALUES ($1, $2, $3, $4, $5)',
      [title, price, image, category, color]
    );
    res.status(201).json({ message: 'Product added' });
  } catch (err) {
    res.status(500).json({ message: 'Error inserting product' });
  }
});

 // Delete
router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product' });
  }
});
 // Change

 router.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
  if (result.rows.length === 0) return res.status(404).json({ message: 'Not found' });
  res.json(result.rows[0]);
});

router.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { title, price, image, category, color } = req.body;
  try {
    await pool.query(
      'UPDATE products SET title = $1, price = $2, image = $3, category = $4, color = $5 WHERE id = $6',
      [title, price, image, category, color, id]
    );
    res.json({ message: 'Product updated' });
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ message: 'Error updating product' });
  }
});


module.exports = router;