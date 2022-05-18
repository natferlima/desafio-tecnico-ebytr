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

const readOne = async (id) => {
  const result = await model.findById(id);
  return result;
};

const update = async (id, obj) => {
  const result = await model.findByIdAndUpdate(id, obj, { new: true });
  return result;
};

const remove = async (id) => {
  const result = await model.findByIdAndDelete(id);
  return result;
};

module.exports = { create, readAll, readOne, update, remove, model };