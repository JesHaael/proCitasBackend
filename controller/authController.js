const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async(req,res)=>{
    //revisar errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()});
    }

    const {email, password} = req.body;
    try {
        // revisar que usuario esta registrado
        let usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({msg:"El usuario no Existe"});
        }
        //revisasr pasword
        const passok = await bcryptjs.compare(password, usuario.password);
        if(!passok){
            return res.status(400).json({msg:"contraseña incorrecta"});
        }
        // si todo ok crear y firmar token
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
        console.log('Hubo un Error autenticarUsiario');
        console.log(error);
        res.status(400).send('Hubo un Error autenticarUsiario')  
    }
}

exports.usuarioAutenticado = async (req,res) =>{
    try {
        const usuario = await Usuario.findById(req.usuario.id);
        res.json({usuario})
    } catch (error) {
        res.status(500).send({msg:'Hubo un Error'})         
    }
}
