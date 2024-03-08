import pg from "pg";
const { Pool } = pg;

let localPoolConfig =
{
  user: 'myuser',
  host: 'localhost',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5433,
}

const poolConfig = process.env.DATABASE_URL ? {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
} : localPoolConfig;

const pool = new Pool(poolConfig);

// Add an event listener for the 'connect' event
// pool.on('connect', () =>
// {
//   console.log('Connected to the database!');
// });

// // Add an event listener for the 'error' event
// pool.on('error', (err) =>
// {
//   console.error('Error connecting to the database:', err.message);
// });

// Function to test the database connection
const testDatabaseConnection = async () =>
{
  try
  {
    await pool.connect();
    console.log('Connected to the database!');
  } catch (err)
  {
    console.error('Error connecting to the database:', err.message);
  }
  // finally
  // {
  //   // Make sure to release the client back to the pool
  //   pool.end();
  // }
};

// Call the function during server bootstrap
testDatabaseConnection();

export default pool;
