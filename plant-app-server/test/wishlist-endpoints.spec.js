'use strict';
const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('wishlist Endpoints', function() {
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

  describe('GET /api/wishlist', () => {
    const testUsers = helpers.makeUsersArray();
    const testPlants = helpers.makePlantsArray();
    const testWishlist = helpers.makeWishlistArray(testUsers, testPlants);

    beforeEach('insert plants, users, wishlist', () => {
      return db 
        .into('plants_base')
        .insert(testPlants)
        .then(() => {
          return db
            .into('plants_users')
            .insert(testUsers);
        })
        .then(() => {
          return db
            .into('plants_wishes')
            .insert(testWishlist);
        });
    });

    // it('responds with a 200 and the wishlist', () => {
    //   return supertest(app)
    //     .get('/api/wishlist')
    //     .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
    //     .expect(200, testWishlist);
    // }); 

  });

  describe('POST /api/wishlist', () => {
    const testUsers = helpers.makeUsersArray();
    const testPlants = helpers.makePlantsArray();
    const testWishlist = helpers.makeWishlistArray(testUsers, testPlants);

    beforeEach('insert plants, users, wishlist', () => {
      return db 
        .into('plants_base')
        .insert(testPlants)
        .then(() => {
          return db
            .into('plants_users')
            .insert(testUsers);
        })
        .then(() => {
          return db
            .into('plants_wishes')
            .insert(testWishlist);
        });
    });

    it('responds 401 when not logged in', () => {
      const userInvalidCreds = { user_name: 'user-not', password: 'existy' };
      const newWish = {
        user_id: 1,
        plant_id: 1,
      };
      return supertest(app)
        .post('/api/wishlist')
        .set('Authorization', helpers.makeAuthHeader(userInvalidCreds))
        .send(newWish)
        .expect(401, {error: 'Unauthorized request'});
    })

    // it('creates a new wish, responding with a 201 and returning the wish', () => {
    //   const newWish = {
    //     user_id: 1,
    //     plant_id: 1,
    //   };
    //   return supertest(app)
    //     .post('/api/wishlist')
    //     .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
    //     .send(newWish)
    //     .expect(201)
    //     .expect(res => {
    //       expect(res.body).to.have.property('id');
    //       expect(res.user_id).to.eql(newWish.user_id);
    //       expect(res.plant_id).to.eql(newWish.plant_id);
    //     });
    // });

  });

  // describe('DELETE /api/wishlist', () => {
  //   const testUsers = helpers.makeUsersArray();
  //   const testPlants = helpers.makePlantsArray();
  //   const testWishlist = helpers.makeWishlistArray(testUsers, testPlants);

  //   beforeEach('insert plants, users, wishlist', () => {
  //     return db 
  //       .into('plants_base')
  //       .insert(testPlants)
  //       .then(() => {
  //         return db
  //           .into('plants_users')
  //           .insert(testUsers);
  //       })
  //       .then(() => {
  //         return db
  //           .into('plants_wishes')
  //           .insert(testWishlist);
  //       });
  //   });

  //   it('responds with a 204 and removes the wish', () => {
  //     const idToRemove = 1;
  //     const expectedWishlist = testWishlist.filter(wish => wish.id !== idToRemove);

  //     return supertest(app)
  //       .delete('/api/wishlist')
  //       .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
  //       .send(`${idToRemove}`)
  //       .expect(204)
  //       .then(res => 
  //         supertest(app)
  //           .get('/api/wishlist')
  //           .expect(expectedWishlist)
  //       );
  //   });

  // });

});