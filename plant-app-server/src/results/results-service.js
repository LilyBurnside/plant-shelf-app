'use strict';

const ResultsService = {
  
  getAllPlants(db, query) {
    return db
      .select('*')
      .from('plants_base')
      .where(query);
  },

  //don't need to show any new thing on the backend - this will be viewed on the wishlist route
  insertWishlistPlant(db, newPlant) {
    return db
      .insert(newPlant)
      .into('plants_wishes');
  },

};

module.exports = ResultsService;