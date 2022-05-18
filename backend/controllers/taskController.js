const task = require('../services/task');

const readAll = async (_req, res) => {
  const result = await task.readAll();
  return res.status(200).json(result);
};

const create = async (req, res) => {
  const { description, status, date } = req.body;
  const result = await task.create({ description, status, date });
  return res.status(201).json(result);
};

const readOne = async (req, res) => {
  const { id } = req.params;
  const result = await task.readOne(id);
  return res.status(200).json(result);
};

const update = async (req, res) => {
  const { id } = req.params;
  const obj = req.body;
  const result = await task.update(id, obj);
  return res.status(200).json(result);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await task.remove(id);
  return res.status(200).json(result);
};

module.exports = { readAll, create, readOne, update, remove };