var mongoose = require("mongoose")

var AsignacionSchema = new mongoose.Schema({
    fechaInicioAsignacion: { type: Date, default: Date.now },
    fechaFinAsignacion: Date,
    conductor: { type: mongoose.Schema.Types.ObjectId, ref: 'Conductor' },
    vehiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehiculo' },
    origen: String,
    destino: String,
    pasajero: String,
    empresa: String
}, { collection: 'asignaciones' })

module.exports = mongoose.model('Asignacion', AsignacionSchema);