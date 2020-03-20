'use strict';
const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Quiz Endpoints', function() {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('cleanup', () => helpers.cleanTables(db));

  afterEach('cleanup', () => helpers.cleanTables(db));

  describe('GET /api/quiz', () => {
    const testQuestions = helpers.makeQuestionsArray();

    beforeEach('insert questions', () => {
      return db 
        .into('plants_questions')
        .insert(testQuestions);
    });

    it('responds with a 200 and all the questions', () => {
      return supertest(app)
        .get('/api/quiz')
        .expect(200, testQuestions);
    }); 

  });

});
