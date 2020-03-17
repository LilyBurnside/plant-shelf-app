'use strict';
const express = require('express');
const ResultsService = require('./results-service');
const { requireAuth } = require('../jwt-auth');

const resultsRouter = express.Router();
const jsonBodyParser = express.json();

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

// const serializeUser = user => ({
//   id: user.id,
//   user_name: user.user_name,
// });

const serializeWish = wish => ({
  id: wish.id,
  plant_id: wish.plant_id,
  user_id: wish.user_id,
});

resultsRouter
  .route('/')
  .get((req, res, next) => { 
    //query validation goes here
    ResultsService.getAllPlants(req.app.get('db'), req.query)
      .then(plants => {
        res.json(plants.map(serializePlant));
      })
      .catch(next);  
  })
  .post(requireAuth, jsonBodyParser, (req, res, next) => {
    const { user_id, plant_id } = req.body;
    const newWish = { user_id, plant_id };

    ResultsService.insertWishlistPlant(req.app.get('db'), newWish)
      .then(wish => {
        res
          .status(201)
          .json(wish.map(serializeWish));
      })
      .catch(next);
  });

module.exports = resultsRouter;