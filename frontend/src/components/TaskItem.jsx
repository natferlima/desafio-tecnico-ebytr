import React,{ useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function TaskItem({ task, index }) {
  const { removeTask } = useContext(GlobalContext);

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
          onClick={ () => removeTask(task._id) }
        >
          Remover
        </button>
      </td>


    </tr>
  );
}

export default TaskItem;
