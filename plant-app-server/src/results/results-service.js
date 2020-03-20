'use strict';

const ResultsService = {
  
  getAllPlants(db, query) {
    return db
      .select('*')
      .from('plants_base')
      .where(query);
  },

  //posting to wishlist
  // insertWishlistPlant(db, newPlant) {
  //   return db
  //     .insert(newPlant)
  //     .into('plants_wishes');
  // },

};

module.exports = ResultsService;