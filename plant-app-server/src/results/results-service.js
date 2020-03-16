'use strict';

const ResultsService = {
  
  getAllPlants(db) {
    return db
      .select('*')
      .from('plants_base');
  },

};

module.exports = ResultsService;