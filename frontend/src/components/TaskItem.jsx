import React from 'react';

function TaskItem({ task, index }) {
  return (
    <tr>
      <td>{ index + 1 }</td>
      <td>{ task.description }</td>
      <td>{ task.date }</td>
      <td>{ task.status }</td>
      <td>
        <button
          type="button"
        >
          Editar
        </button>
      </td>
      <td>
        <button
          type="button"
        >
          Remover
        </button>
      </td>


    </tr>
  );
}

export default TaskItem;
