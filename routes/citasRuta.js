const express = require('express');
const router = express.Router();
const citaController = require('../controller/citaController');

//creamos las rutas del CRUD
router.post('/',citaController.agregarCitas);
router.get('/',citaController.mostrarCitas);
//router.get('/:id',citaController.buscarCliente); 
router.put('/:id',citaController.actualizarCitas); 
//router.patch('/:id',clienteController.modificarClientes); 
router.delete('/:id',citaController.eliminarCita); 

module.exports = router;