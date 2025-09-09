const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const driverRoutes = require('./routes/drivers');
app.use('/api/drivers', driverRoutes);

const raceRoutes = require('./routes/races');
app.use('/api/races', raceRoutes);

const path = require('path');

// Отдача статических файлов из React-сборки
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Обработка всех остальных маршрутов — SPA fallback
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


module.exports = app;
