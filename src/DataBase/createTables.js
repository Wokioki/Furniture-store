const pool = require('../db');

async function createPostsTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      image TEXT
    );
  `;

  try {
    await pool.query(query);
    console.log("The 'posts' table was successfully created.");
  } catch (err) {
    console.error("Error creating posts table:", err);
  } finally {
    pool.end();
  }
}

createPostsTable();