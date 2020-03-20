'use strict';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function makeUsersArray() {
  return [
    {
      id: 1,
      user_name: 'test-user-1',
      password: 'password',
    },
    {
      id: 2,
      user_name: 'test-user-2',
      password: 'password',
    },
    {
      id: 3,
      user_name: 'test-user-3',
      password: 'password',
    },
    {
      id: 4,
      user_name: 'test-user-4',
      password: 'password',
    },
  ];
}

function makePlantsArray() {
  return [
    {
      id: 1,
      cmn_name: 'testplant1',
      sci_name: 'testusplantus1',
      photo: 'http://placehold.it/500x500',
      light: 'high',
      pet_safe: 'yes',
      water: 'high',
      size: 'large',
      care_level: 'advanced'
    },
    {
      id: 2,
      cmn_name: 'testplant2',
      sci_name: 'testusplantus2',
      photo: 'http://placehold.it/500x500',
      light: 'high',
      pet_safe: 'yes',
      water: 'high',
      size: 'large',
      care_level: 'advanced'
    },
    {
      id: 3,
      cmn_name: 'testplant3',
      sci_name: 'testusplantus3',
      photo: 'http://placehold.it/500x500',
      light: 'high',
      pet_safe: 'yes',
      water: 'high',
      size: 'large',
      care_level: 'advanced'
    },
    {
      id: 4,
      cmn_name: 'testplant4',
      sci_name: 'testusplantus4',
      photo: 'http://placehold.it/500x500',
      light: 'high',
      pet_safe: 'yes',
      water: 'high',
      size: 'large',
      care_level: 'advanced'
    }
  ];
}

function makeQuestionsArray() {
  return [
    {
      id: 1,
      question: 'test 1?',
      answer_1: 'test1_1',
      answer_2: 'test1_2',
      answer_3: 'test1_3',
      answer_4: 'test1_4',
    },
    {
      id: 2,
      question: 'test 2?',
      answer_1: 'test2_1',
      answer_2: 'test2_2',
      answer_3: 'test2_3',
      answer_4: 'test2_4',
    },
    {
      id: 3,
      question: 'test 3?',
      answer_1: 'test3_1',
      answer_2: 'test3_2',
      answer_3: 'test3_3',
      answer_4: 'test3_4',
    },
    {
      id: 4,
      question: 'test 4?',
      answer_1: 'test4_1',
      answer_2: 'test4_2',
      answer_3: 'test4_3',
      answer_4: 'test4_4',
    },
  ];
}

function makeWishlistArray (users, plants) {
  return [
    {
      id: 1,
      plant_id: plants[0].id,
      user_id: users[0].id,
    },
    {
      id: 2,
      plant_id: plants[1].id,
      user_id: users[1].id,
    },
    {
      id: 3,
      plant_id: plants[2].id,
      user_id: users[2].id,
    },
    {
      id: 4,
      plant_id: plants[3].id,
      user_id: users[3].id,
    },
  ];
}

function makePlantsFixtures() {
  const testUsers = makeUsersArray();
  const testPlants = makePlantsArray();
  const testQuestions = makeQuestionsArray();
  const testWishes = makeWishlistArray(testUsers, testPlants);
  return { testUsers, testPlants, testQuestions, testWishes };
}

// function seedPlantsTables(db, users, plants, questions, wishes) {
//   return db.transaction(async trx => {
//     await seedUsers(trx, users)
//     await trx.into('plants_base').insert(plants)
//     await trx.into('plants_questions').insert(questions)
//     // await trx.raw(
//     //   `SELECT setval('plants_wishes_id_seq', ?)`,
//     //   [plants[plants.length - 1].id]
//     // )
//     await trx.into('plants_wishes').insert(wishes)
//   })
// }

function cleanTables(db) {
  return db.raw(
    `TRUNCATE 
      plants_users,
      plants_base,
      plants_questions,
      plants_answers,
      plants_wishes
      RESTART IDENTITY CASCADE`
  );
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db.into('plants_users').insert(preppedUsers)
    .then(() => {
      return db.raw(
        `SELECT setval('plants_users_id_seq', ?)`,
        [users[users.length - 1].id]
      )
    })
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({user_id: user.id}, secret, {
    subject: user.user_name,
    algorithm: 'HS256'
  })
  return `Bearer ${token}`
}

// function makeAuthHeader(user) {
//   const token = Buffer.from(`${user.user_name}:${user.password}`).toString('base64')
//   return `Bearer ${token}`
// }

module.exports = {
  makeUsersArray,
  makePlantsArray,
  makeQuestionsArray,
  makeWishlistArray,
  makePlantsFixtures,
  cleanTables,
  seedUsers,
  makeAuthHeader,
};