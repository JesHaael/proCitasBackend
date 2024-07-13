const Cita = require('../models/Cita');
//funcion agregar citas
exports.agregarCitas = async(req,res)=>{
    try {
       let citas = new Cita(req.body); 
       await citas.save();
       res.send({citas});

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Error al agregar citas"});
    }

}
exports.mostrarCitas = async(req,res)=>{
    try {
       let citas =  await Cita.find();
       res.json({citas});

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Error al mostar citas"});
    }

}

exports.actualizarCitas = async(req,res)=>{
//findOneAndUpdate
    try {
        const citas = await Cita.findOneAndUpdate(
            {_id:req.params.id},req.body);
            if(!citas) res.status(404).json({msg:"CITA NO ENCONTRADA"});
        else res.json(citas)
              
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Error al actualizar citas"});
    }
}
//Eliminar clientes
exports.eliminarCita = async(req,res)=>{
    try {
        let citas = await Cita.findById(req.params.id);
        if(!citas){
            res.status(404).send('Cita no encontrado');
        } else{
            await Cita.findByIdAndDelete({_id: req.params.id})
            res.json({msg:'El cita ha sido eliminado'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar el cita')
    }

}