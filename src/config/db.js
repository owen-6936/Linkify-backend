import mysql from 'mysql2/promise';
import { config } from 'dotenv';
import logger from '../../winston-logger.js';
config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

(async () => {
  try {
    const connection = await pool.getConnection();
    logger.info('Successfully connected to MySQL database!');
    connection.release(); // Release the connection back to the pool
  } catch (error) {
    logger.error('Failed to connect to MySQL database:', error.message);
    // It's good practice to exit if a critical dependency like the DB fails at startup
    process.exit(1);
  }
})();

export default pool;
