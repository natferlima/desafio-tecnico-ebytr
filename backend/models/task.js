const mongoose = require('mongoose');

const model = mongoose.model('Task', {
  description: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, required: true },
});

const readAll = async () => {
  const result = await model.find();
  return result;
};

const create = async (obj) => {
  const result = await model.create(obj);
  return result;
};

module.exports = { create, readAll, model };