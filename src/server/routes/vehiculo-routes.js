var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var Vehiculo = require('../models/Vehiculo.js');

// router.get('/', function (req, res, next) {
//     res.send('prueba...');
// });

// Obtiene todos los vehiculos.
router.get('/', function (req, res, next) {
    // res.send('vehiculo');
    Vehiculo.find(function (err, vehiculos) {
        if (err) return next(err);
        res.json(vehiculos);
    })
});

// Obtiene un vehiculo específico.
router.get('/:id', function (req, res, next) {
    Vehiculo.findById(req.params.id, function (err, vehiculo) {
        if (err) return next(err);
        res.json(vehiculo);  
    })
});

// Crea un vehiculo.
router.post('/', function(req, res, next) {
    Vehiculo.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

/* Actualiza un vehiculo */
router.put('/:id', function(req, res, next) {
    Vehiculo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* Elimina un vehiculo */
router.delete('/:id', function(req, res, next) {
    Vehiculo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

module.exports = router;