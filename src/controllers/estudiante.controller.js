const Estudiante = require('../models/estudiante.model');

const listar = async (req, res) => {
  try {
    const estudiantes = await Estudiante.obtenerEstudiantes();
    res.json(estudiantes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
};

const obtenerPorId = async (req, res) => {
  try {
    const id = parseInt(req.params.id); // Obtiene el ID del parámetro de la URL y lo convierte a entero
    const estudiante = await Estudiante.obtenerEstudiantePorId(id);

    if (estudiante) {
      res.json(estudiante);
    } else {
      res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el estudiante' });
  }
};
const crear = async (req, res) => {
  try {
    const nuevo = await Estudiante.crearEstudiante(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear estudiante' });
  }
};

const eliminar = async (req, res) => {
  try {
    await Estudiante.eliminarEstudiante(req.params.id);
    res.json({ mensaje: 'Estudiante eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar estudiante' });
  }
};

const actualizar = async (req, res) => {
  console.log('👉 PUT /api/estudiantes/:id llamado');
  try {
    const id = req.params.id;
    const cambios = req.body;
    await Estudiante.actualizarEstudiante(id, cambios);
    res.json({ mensaje: 'Estudiante actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar estudiante' });
  }
};

module.exports = {
  listar,
  crear,
  eliminar,
  actualizar,
  obtenerPorId
};
