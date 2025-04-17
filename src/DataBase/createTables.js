const pool = require('./db');

async function createUsersTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,                         
      name VARCHAR(100) NOT NULL,                  
      email VARCHAR(100) UNIQUE NOT NULL,         
      password VARCHAR(255) NOT NULL,             
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
    );
  `;

  try {
    await pool.query(query);
    console.log("The 'users' table was successfully created.");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    pool.end();
  }
}

createUsersTable();