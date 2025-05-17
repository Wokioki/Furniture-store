const express = require('express');
const router = express.Router();
const pool = require('../../server/db');

router.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts ORDER BY date DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching post' });
  }
});

router.post('/posts', async (req, res) => {
  const { title, content, image } = req.body;
  try {
    await pool.query(
      'INSERT INTO posts (title, content, image) VALUES ($1, $2, $3)',
      [title, content, image]
    );
    res.status(201).json({ message: 'Post added' });
  } catch (err) {
    console.error('Error inserting post:', err);
    res.status(500).json({ message: 'Error inserting post' });
  }
});


router.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM posts WHERE id = $1', [id]);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    console.error('Error deleting post:', err);
    res.status(500).json({ message: 'Error deleting post' });
  }
});


router.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, image } = req.body;

  try {
    await pool.query(
      'UPDATE posts SET title = $1, content = $2, image = $3 WHERE id = $4',
      [title, content, image, id]
    );
    res.json({ message: 'Post updated' });
  } catch (err) {
    console.error('Error updating post:', err);
    res.status(500).json({ message: 'Error updating post' });
  }
});


module.exports = router;