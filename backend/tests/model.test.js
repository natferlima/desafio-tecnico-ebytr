const Sinon = require('sinon');
const chai = require('chai');
const task = require('../models/task');

const { expect } = chai;

describe('Model Task', function () {
  const taskMock = {
    _id: '62842f665f799c435643464e',
    description: 'estudar modulo 32.1',
    status: 'pendente',
    date: '1970-01-01T04:44:12.022Z',
  };

  const mockTasks = [taskMock];

  describe('testa função readAll', function () {
    before(function () {
      Sinon.stub(task.model, 'find').resolves(mockTasks);
    });

    after(function () {
      Sinon.restore();
    });

    it('retorna uma lista', async function () {
      const result = await task.readAll();
      expect(result).to.be.an('array');
    });
    it('objeto tem as chaves description, status e date', async function () {
      const result = await task.readAll();
      expect(result[0]).to.include.any.keys('id', 'description', 'status', 'date');
    });
  });
  describe('testa função readOne', function () {
    before(function () {
      Sinon.stub(task.model, 'findById').resolves(taskMock);
    });

    after(function () {
      Sinon.restore();
    });

    it('retorna um objeto', async function () {
      const result = await task.readOne();
      expect(result).to.be.an('object');
    });
    it('objeto tem as chaves id, description, status e date', async function () {
      const result = await task.readOne();
      expect(result).to.include.any.keys('id', 'description', 'status', 'date');
    });
  });

  describe('testa função create', function () {
    before(function () {
      Sinon.stub(task.model, 'create').resolves(taskMock);
    });

    after(function () {
      Sinon.restore();
    });

    it('retorna um objeto', async function () {
      const result = await task.create(taskMock.description, taskMock.date, taskMock.status);
      expect(result).to.be.an('object');
    });
    it('objeto tem as chaves description, status e date', async function () {
      const result = await task.create();
      expect(result).to.include.any.keys('id', 'description', 'status', 'date');
    });
  });
});
