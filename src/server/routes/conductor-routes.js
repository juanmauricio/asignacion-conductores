var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var Conductor = require('../models/Conductor.js');

// router.get('/', function (req, res, next) {
//     res.send('prueba...');
// });

// Obtiene todos los conductores.
router.get('/', function (req, res, next) {
    // res.send('conductor');
    Conductor.find(function (err, conductores) {
        if (err) return next(err);
        res.json(conductores);
    })
});

// Obtiene un conductor específico.
router.get('conductor/:id', function (req, res, next) {
    Conductor.findById(function (err, conductor) {
        if (err) return next(err);
        res.json(conductor);
    })
});

// Crea un conductor.
router.post('/', function(req, res, next) {
    Conductor.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

/* Actualiza un conductor */
router.put('/:id', function(req, res, next) {
    Conductor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* Elimina un conductor */
router.delete('/:id', function(req, res, next) {
    Conductor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

module.exports = router;