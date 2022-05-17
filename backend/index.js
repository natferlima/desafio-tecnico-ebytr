const express = require('express');
const bodyParser = require('body-parser');
const { connection } = require('./connection');
const { taskRouter } = require('./routes');

const app = express();
app.use(bodyParser.json());

app.use('/tasks', taskRouter);

connection();

app.listen(3000, () => console.log('backend rodando na porta 3000'));