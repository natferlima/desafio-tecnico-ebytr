const Sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const task = require('../models/task');

chai.use(chaiHttp);
const { expect } = chai;

/* eslint no-underscore-dangle: 0 */

const LOCALHOST = 'http://localhost:3000';

describe('Controller Task', function () {
  const taskMock = {
    _id: '62842f665f799c435643464e',
    description: 'estudar modulo 32.1',
    status: 'pendente',
    date: '1970-01-01T04:44:12.022Z',
  };

  const mockTasks = [taskMock];

  describe('#create', function () {
    before(function () {
      Sinon.stub(task.model, 'create').resolves(taskMock);
    });

    after(function () {
      Sinon.restore();
    });

    it('retorna status 201 e um objeto', async function () {
      const response = await chai
      .request(LOCALHOST)
      .post('/tasks')
      .send({
        description: taskMock.description,
        date: taskMock.date,
        status: taskMock.status,
      });
      expect(response).to.have.status(201);
      expect(response.body).to.be.an('object');
    });
    it('objeto tem as chaves id, description, date e status', async function () {
      const response = await chai
      .request(LOCALHOST)
      .post('/tasks')
      .send({
        description: taskMock.description,
        date: taskMock.date,
        status: taskMock.status,
      });
      expect(response.body).to.include.any.keys('id', 'description', 'status', 'date');
      expect(response.body.status).to.be.eql('pendente');
    });
    it(`retorna status 400 e mensagem: "description" is required,
        quando não passa description`, async function () {
      const response = await chai
      .request(LOCALHOST)
      .post('/tasks')
      .send({
        date: taskMock.date,
        status: taskMock.status,
      });
      expect(response).to.have.status(400);
      expect(response.body).to.be.eql({ message: '"description" is required' });
    });
  });

  describe('#readAll', function () {
    before(function () {
      Sinon.stub(task.model, 'find').resolves(mockTasks);
    });

    after(function () {
      Sinon.restore();
    });

    it('retorna status 200', async function () {
      const response = await chai
      .request(LOCALHOST)
      .get('/tasks');
      expect(response).to.have.status(200);
    });
    it('retorna uma lista', async function () {
      const response = await chai
      .request(LOCALHOST)
      .get('/tasks');
      expect(response.body).to.be.an('array');
    });
  });

  describe('#update', function () {
    before(function () {
      Sinon.stub(task.model, 'findByIdAndUpdate').resolves(taskMock);
    });

    after(function () {
      Sinon.restore();
    });

    it('retorna status 200 e um objeto', async function () {
      const response1 = await chai
      .request(LOCALHOST)
      .post('/tasks')
      .send({
        description: taskMock.description,
        date: taskMock.date,
        status: taskMock.status,
      });

      const id = response1.body._id;

      const response2 = await chai
      .request(LOCALHOST)
      .put(`/tasks/${id}`)
      .send({
        status: 'pronto',
      });

      expect(response2).to.have.status(200);
      expect(response2.body).to.be.an('object');
    });

    it('retorna status "pronto" no lugar de "pendente"', async function () {
      const response1 = await chai
      .request(LOCALHOST)
      .post('/tasks')
      .send({
        description: taskMock.description,
        date: taskMock.date,
        status: taskMock.status,
      });
      
      const id = response1.body._id;

      const response2 = await chai
      .request(LOCALHOST)
      .put(`/tasks/${id}`)
      .send({
        status: 'pronto',
      });

      expect(response2.body.status).to.be.eql('pronto');
    });
  });

  describe('#delete', function () {
    before(function () {
      Sinon.stub(task.model, 'findByIdAndDelete').resolves(taskMock);
    });

    after(function () {
      Sinon.restore();
    });

    it('retorna status 200', async function () {
      const response1 = await chai
      .request(LOCALHOST)
      .post('/tasks')
      .send({
        description: taskMock.description,
        date: taskMock.date,
        status: taskMock.status,
      });

      const id = response1.body._id;

      const response2 = await chai
      .request(LOCALHOST)
      .delete(`/tasks/${id}`);

      expect(response2).to.have.status(200);
      expect(response2.body).to.be.an('object');
      expect(response2.body._id).to.be.eql(id);
    });
    it('retorna objeto deletado com id correto', async function () {
      const response1 = await chai
      .request(LOCALHOST)
      .post('/tasks')
      .send({
        description: taskMock.description,
        date: taskMock.date,
        status: taskMock.status,
      });

      const id = response1.body._id;

      const response2 = await chai
      .request(LOCALHOST)
      .delete(`/tasks/${id}`);

      expect(response2.body).to.be.an('object');
      expect(response2.body._id).to.be.eql(id);
    });
  });
});
