const db = require('../config/db');

const obtenerEstudiantes = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT id, nombre, apellido, fecha_nacimiento, email FROM estudiantes', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const obtenerEstudiantePorId = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT id, nombre, apellido, fecha_nacimiento, email FROM estudiantes WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      else if (results.length > 0) resolve(results[0]); // Si se encuentra un estudiante, devuelve el primer resultado
      else resolve(null); // Si no se encuentra ningún estudiante con ese ID
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
const actualizarEstudiante = (id, data) => {
  const sql = 'UPDATE estudiantes SET nombre = ?, apellido = ?, fecha_nacimiento = ?, email = ? WHERE id = ?';
  return new Promise((resolve, reject) => {
    db.query(sql, [data.nombre, data.apellido, data.fecha_nacimiento, data.email, id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};


module.exports = {
  obtenerEstudiantes,
  crearEstudiante,
  eliminarEstudiante,
  actualizarEstudiante,
  obtenerEstudiantePorId
};
