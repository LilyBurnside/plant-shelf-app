'use strict';

const QuizService = {
  getAllQuestions(db) {
    return db 
      .select('*')
      .from('plants_questions');
  },

  // getAllAnswers(db) {
  //   return db
  //     .select('*')
  //     .from('plants_answers');
  // },


  getById(db, id) {
    return db
      .select('*')
      .from('plants_questions')
      .where('id', id)
      .first();
  },

};

module.exports = QuizService;