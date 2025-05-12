const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

// Rutas
const estudianteRoutes = require('./routes/estudiante.routes');
app.use('/api/estudiantes', estudianteRoutes);

module.exports = app;
