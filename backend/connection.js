const mongoose = require('mongoose');

const connection = (
  mongoDatabaseURI = 'mongodb://localhost:27017/todolist',
  ) => mongoose.connect(mongoDatabaseURI);

module.exports = { connection };
