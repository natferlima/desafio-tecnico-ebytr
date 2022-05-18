const task = require('../services/task');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  if (id.length < 24) {
    return res.status(400).json(
      { message: 'Id must have 24 hexadecimal characters' },
    );
  }
  const result = await task.readOne(id);
  if (!result) {
    return res.status(404).json(
      { message: 'Task not found' },
    );
  }
  next();
};