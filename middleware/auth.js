const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    //leer token del header
    const token = req.header('x-auth-token');
    //const token = header.split(" ")[1];
    //revisar si tenemos un token
  
    if (!token){
        return res.status(400).json({msg:"No hay token, permiso no valido"});
    }
    //validar token
    try {
        const cifrado = jwt.verify(token,process.env.SECRETA)
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(403).json({msg:"token no vlido"});
    }
}