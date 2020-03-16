'use strict';
const express = require('express');
const ResultsService = require('./results-service');

const resultsRouter = express.Router();

const serializePlant = plant => ({
  id: plant.id,
  cmn_name: plant.cmn_name,
  sci_name: plant.sci_name,
  photo: plant.photo,
  light: plant.light,
  pet_safe: plant.pet_safe,
  water: plant.water,
  size: plant.size,
  care_level: plant.care_level,
});

resultsRouter
  .route('/')
  .get((req, res, next) => {
    ResultsService.getAllPlants(req.app.get('db'))
      .then(plants => {
        res.json(plants.map(serializePlant));
      })
      .catch(next);
  });

module.exports = resultsRouter;