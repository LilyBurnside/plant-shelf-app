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
  answer_4: question.answer_4,
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

quizRouter
  .route('/:question_id')
  .all(checkQuestionExists)
  .get((req, res) => {
    res.json(serializeQuestion(res.question));
  });

async function checkQuestionExists(req, res, next) {
  try{
    const question = await QuizService.getById(
      req.app.get('db'),
      req.params.question_id
    )

    if (!question)
      return res.status(404).json({
        error: `Question doesn't exist`
      })

    res.question = question
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = quizRouter