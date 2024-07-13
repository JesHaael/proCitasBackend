const mongoose = require('mongoose');
//el modelo que vamos a implementar debe sesr el mismo a la base de datos
const citaSchema = mongoose.Schema({
 /*entidad,especialidad,sede,costo, hora,fecha*/   
    entidad:{
        type: 'string',
        required: true,
    },
    especialidad:{
        type: 'string',
        required: true,
    },
    sede:{
        type: 'string',
        required: true,
    },
    costo:{
        type: 'Number',
        required: true,
    },
    hora:{
        type: 'string',
        required: true,
    },
    fecha:{
        type: 'Date',
        required: true,
    }
} ,{versionkey: false}  );
module.exports = mongoose.model('Cita', citaSchema);