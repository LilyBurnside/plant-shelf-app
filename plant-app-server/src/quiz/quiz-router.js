'use strict';
const express = require('express');
const QuizService = require('./quiz-service');

const quizRouter = express.Router();

const serializeQuestion = question => ({
  id: question.id,
  question: question.question,
  answer_1: question.answer_1,
  answer_2: question.answer_2,
  answer_3: question.answer_3,
  answer_4: question.answer_4
});


quizRouter
  .route('/')
  .get((req, res, next) => {
    QuizService.getAllQuestions(req.app.get('db'))
      .then(questions => {
        res.json(questions.map(serializeQuestion));
      })
      .catch(next);
  });

module.exports = quizRouter;