// Database initialization script
const { execSync } = require('child_process');
const path = require('path');

// This will trigger database initialization when the API is first called
async function initDatabase() {
  try {
    console.log('Initializing database by calling API...');
    
    // Use curl to trigger database initialization
    const response = execSync('curl -s http://localhost:3000/api/categories', { encoding: 'utf8' });
    
    console.log('Database initialized successfully!');
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to initialize database:', error.message);
    console.log('Make sure the development server is running (npm run dev)');
  }
}

initDatabase();