const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./config/passport')(passport);
const routes = require('./routes/routes.js');
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

app.get('/favicon.ico', (req, res) => res.status(204)); // gets rid of dumb favicon error

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', routes);

// Sample route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
