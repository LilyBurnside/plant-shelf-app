'use strict';
const express = require('express');
const WishlistService = require('./wishlist-service');
const { requireAuth } = require('../jwt-auth');

const wishlistRouter = express.Router();
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

const serializeWish = wish => ({
  id: wish.id,
  plant_id: wish.plant_id,
  user_id: wish.user_id,
});

const serializeDelete = plant => ({
  plant_id: plant.plant_id
});

wishlistRouter
  .route('/')
  .get(requireAuth, (req, res, next) => {
    WishlistService.getWishes(req.app.get('db'))
      .then(plants => {
        res.json(plants.map(serializePlant));
      })
      .catch(next);
  })
  .post(requireAuth, jsonBodyParser, (req, res, next) => {
    const { user_id, plant_id } = req.body;
    const newWish = { user_id, plant_id };

    WishlistService.insertWish(req.app.get('db'), newWish)
      .then(wish => {
        res
          .status(201)
          .json(wish.map(serializeWish));
      })
      .catch(next);
  })
  .delete(requireAuth, jsonBodyParser, (req, res, next) =>{
    const plant = req.body.plant_id;

    WishlistService.deleteWish(req.app.get('db'), plant)
      .then(() => {
        res
          .status(204)
          .end();
      })
      .catch(next);
  });

module.exports = wishlistRouter;