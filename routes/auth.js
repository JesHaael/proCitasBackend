const express = require('express');
const router = express.Router();
const {check} =  require('express-validator');
const authController = require('../controllers/authController');
const auth  = require('../middleware/auth');

// autenticar el usuario
//api/auth

router.post('/',
    [
        check("email","agregar email valido").isEmail(),
        check("password","El password de_be tener 10 caracteres _Auth").isLength({
            min:10,
        }),
    ],
    authController.autenticarUsuario
);

router.get('/', auth, authController.usuarioAutenticado); 
module.exports = router;
