'use strict';
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const quizRouter = require('./quiz/quiz-router');
const authRouter = require('./auth/auth-router');
const resultsRouter = require('./results/results-router');
const wishlistRouter = require('./wishlist/wishlist-router');

const { NODE_ENV } = require('./config');
const app = express();

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'test',
}));
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRouter);
app.use('/api/results', resultsRouter);
app.use('/api/quiz', quizRouter);
app.use('/api/wishlist', wishlistRouter);

app.use(function errorHandler(error, req, res, next) { // eslint-disable-line no-unused-vars
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;