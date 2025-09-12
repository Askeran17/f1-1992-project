const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https://cdn.jsdelivr.net'],
        connectSrc: ["'self'"],
        fontSrc: ["'self'", 'https:', 'data:'],
        objectSrc: ["'none'"],
        frameSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
  })
);
app.use(cors());
app.use(express.json());


const raceRoutes = require('./routes/races');
app.use('/api/races', raceRoutes);


const path = require('path');

// Serve static files from the React app in production
if (process.env.NODE_ENV !== 'test') {
  // Serve static files from the React build
  app.use(express.static(path.resolve(__dirname, '../client/build')));

  // Handle all other routes — SPA fallback
  app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}


module.exports = app;
