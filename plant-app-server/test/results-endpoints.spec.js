'use strict';
const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Results Endpoints', function() {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    })
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('cleanup', () => helpers.cleanTables(db));

  afterEach('cleanup', () => helpers.cleanTables(db));

  describe('GET /api/results', () => {
    const testPlants = helpers.makePlantsArray();

    beforeEach('insert plants', () => {
      return db 
        .into('plants_base')
        .insert(testPlants);
    });

    it('responds with a 200 and all the plants', () => {
      return supertest(app)
        .get('/api/results')
        .expect(200, testPlants);
    }); 

  });

});