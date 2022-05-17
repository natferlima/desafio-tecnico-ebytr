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

module.exports = { readAll, create };