const express = require('express');
const router = express.Router();
const controlador = require('../controllers/estudiante.controller');

router.get('/', controlador.listar);
router.post('/', controlador.crear);
router.delete('/:id', controlador.eliminar);
router.put('/:id', controlador.actualizar);

module.exports = router;
