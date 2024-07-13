const express = require('express');
const ConectarBD =require('../config/db');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
// enlazar conexion con la base de datos funcion conectarBD
ConectarBD();
app.use(cors());
//habiiltar expess.json
app.use(express.json({extended: true}));//mirar
// rutas de aplicacion
app.use("/api/citas", require("../routes/citasRuta"));
//app.use("/api/clientes", require("../routes/cliente"));
//app.use('/api/auth',require("../routes/auth"));
//app.use('/api/usuarios', require("../routes/usuarios"));



//rutas de prueba y configuracion
app.get('/',(req, res) =>{
    res.send('Bienvenidos a citas estas desde el navegador');
});

app.listen(port,() =>console.log("Esta conectado al servidor con el puerto: ", port) );