const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearUsuario = async(req,res)=>{
    //revisar errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()});
    }
    const {email, password} = req.body;
    try {
        //revisar usuario registrado sea unico
        let usuario = await Usuario.findOne({email});
        if(usuario){
            return res.status(400).json({msg:"El usuario ya Existe"});
        }
       //creanos usuario
       usuario = new Usuario(req.body); 
       usuario.password = await bcryptjs.hash(password,10);
       // guardar usuario en base de datos
       await usuario.save(); 
       //firmasr el jwt
       const payload = {
        usuario:{id:usuario.id}
       }; 

       jwt.sign(
         payload,process.env.SECRETA,{
            expiresIn: 3600//una hora
         },(error,token)=>{
            if(error)throw error;
            //mensaje confirmacion
            res.json({token})
         }
       );

    } catch (error) {
       console.log('Hubo un Error al crear usuario');
       console.log(error);
       res.status(400).send('Hubo un Error al crear usuario') 
    }
};
