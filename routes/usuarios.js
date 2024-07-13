const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const {check} = require('express-validator');


//crear usuario

router.post('/',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('email','agrega un email valido').isEmail(),
    check("password","El password de-be tener 10 caracteres_Usuarios").isLength({
        min:10,
    }),
   
],
usuariosController.crearUsuario
    
);
module.exports = router;