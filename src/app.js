const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));
// Rutas
const estudianteRoutes = require('./routes/estudiante.routes');
app.use('/api/estudiantes', estudianteRoutes);

module.exports = app;
