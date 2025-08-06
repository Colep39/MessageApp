const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS for frontend
app.use(cors({
  origin: 'http://localhost:5173', // Vite default
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});
app.get('/favicon.ico', (req, res) => res.status(204)); // gets rid of dumb favicon error


// Sample route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
