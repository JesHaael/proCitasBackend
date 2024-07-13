const mongoose = require('mongoose');
//el modelo que vamos a implementar debe sesr el mismo a la base de datos
    const clienteSchema = mongoose.Schema({
        nombres:{
            type: 'string',
            required: true,
        },
        apellidos:{
            type: 'string',
            required: true,
        },
        cedula:{
            type: 'Number',
            required: true,
        },
        correo:{
            type: 'string',
            required: true,
        },
        numeroContacto:{
            type: 'Number',
            required: true,
        },
        nit:{
            type: 'Number',
            required: true,
        },
        direccion:{
            type: 'string',
            required: true,
        }
    },
    {versionkey: false}
);

module.exports = mongoose.model('Cliente', clienteSchema);