const task = require('../models/task');

const readAll = async () => {
  const result = await task.readAll();
  return result;
};

const create = async (obj) => {
  const result = await task.create(obj);
  return result;
};

const readOne = async (id) => {
  const result = await task.readOne(id);
  return result;
};

const update = async (id, obj) => {
  const result = await task.update(id, obj);
  return result;
};

const remove = async (id) => {
  const result = await task.remove(id);
  return result;
};

module.exports = { readAll, create, readOne, update, remove };