const pool = require('./db');

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Підключення успішне. Час:', result.rows[0]);
  } catch (err) {
    console.error('Помилка при підключенні:', err);
  }
}

testConnection();