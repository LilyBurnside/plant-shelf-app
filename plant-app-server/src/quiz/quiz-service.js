'use strict';
const Treeize = require('treeize');

const QuizService = {
  getAllQuestions(db) {
    return db 
      .select('*')
      .from('plants_quiz');
  },

  getById(db, id) {
    return db
      .select('*')
      .from('plants_quiz')
      .where('id', id)
      .first();
  },

};

module.exports = QuizService;