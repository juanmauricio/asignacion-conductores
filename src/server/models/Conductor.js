var mongoose = require("mongoose")

var ConductorSchema = new mongoose.Schema({
  actualizado: { type: Date, default: Date.now },
  nombres: String,
  apellidos: String,
  tipoDocumento: String,
  numeroDocumento: String,
  direccion: String,
  telefono: String,
  correoElectronico: String
});

module.exports = mongoose.model('Conductor', ConductorSchema);