import task from '../models/task';

const readAll = async () => {
  const result = await task.find();
  return result;
};

const create = async (obj) => {
  const result = await task.create(obj);
  return result;
};

export default { readAll, create };