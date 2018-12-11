var mongoose = require("mongoose")

var ConductorSchema = new mongoose.Schema({
  actualizado: { type: Date, default: Date.now },
  estado: { type: String, default: 'No asignado' },
  nombres: String,
  apellidos: String,
  tipoDocumento: String,
  numeroDocumento: String,
  direccion: String,
  telefono: String,
  correoElectronico: String
}, { collection: 'conductores' });

module.exports = mongoose.model('Conductor', ConductorSchema);