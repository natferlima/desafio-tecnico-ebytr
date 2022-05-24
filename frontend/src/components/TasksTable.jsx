import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import TaskItem from './TaskItem';

function TasksTable() {
  const { tasks } = useContext(GlobalContext);

  if (tasks.length === 0 ) return <div>Carregando</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Data</th>
          <th>Status</th>
          <th>Editar</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        { tasks.map((task, index) => (
          <TaskItem key={ index } task={ task } index={ index } />
        ))}
      </tbody>
    </table>
  );
}

export default TasksTable;
