const db = require('../config/db');

const obtenerEstudiantes = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT id, nombre, apellido, fecha_nacimiento, email FROM estudiantes', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const crearEstudiante = (data) => {
  const sql = 'INSERT INTO estudiantes (nombre, apellido, fecha_nacimiento, email) VALUES (?, ?, ?, ?)';
  return new Promise((resolve, reject) => {
    db.query(sql, [data.nombre, data.apellido, data.fecha_nacimiento, data.email], (err, result) => {
      if (err) reject(err);
      else resolve({ id: result.insertId, ...data });
    });
  });
};

const eliminarEstudiante = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM estudiantes WHERE id = ?', [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = {
  obtenerEstudiantes,
  crearEstudiante,
  eliminarEstudiante
};
