var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var Asignacion = require('../models/Asignacion');

// router.get('/', function (req, res, next) {
//     res.send('prueba...');
// });

// Obtiene la última asignación.
router.get('/:id', function (req, res, next) {
  Asignacion.findOne({ conductor: req.params.id }).sort({ fechaInicioAsignacion: -1 }).populate('conductor').populate('vehiculo').exec(
    function (err, asignacion) {
      if (err) return next(err);
      res.json(asignacion);
    }
  )
});

// Crea un conductor.
router.post('/', function (req, res, next) {
  Asignacion.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Actualiza un conductor */
router.put('/:id', function (req, res, next) {
  Conductor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Elimina un conductor */
router.delete('/:id', function (req, res, next) {
  Conductor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;