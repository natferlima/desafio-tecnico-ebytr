const Sinon = require('sinon');
const chai = require('chai');
const task = require('../models/task');

const { expect } = chai;

describe('testa model Task', function () {
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
      expect(result).to.be.eql(mockTasks);
    });
  });
});
