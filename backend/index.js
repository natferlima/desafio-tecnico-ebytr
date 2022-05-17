import express from 'express';
import connection from './connection';
import routes from './routes';

const app = express();

app.use('/tasks', routes);

connection();

app.listen(3000, () => console.log('backend rodando na porta 3000'));