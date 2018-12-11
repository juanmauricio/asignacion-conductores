var mongoose = require("mongoose")

var VehiculoSchema = new mongoose.Schema({
  creado: { type: Date, default: Date.now },
  tipoVehiculo: String,
  placas: String,
  fechaSOAT: Date,
  estado: { type: String, default: 'No asignado' },

}, { collection: 'vehiculos' });

module.exports = mongoose.model('Vehiculo', VehiculoSchema);