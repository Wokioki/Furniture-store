const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',         
    host: 'localhost',        
    database: 'furniture_shop',  
    password: '5656', 
    port: 5432,                 
  });

  
module.exports = pool;