import React,{ useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import TaskModal from './TaskModal';

function TaskItem({ task, index }) {
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const { removeTask } = useContext(GlobalContext);

  return (
    <tr>
      <td data-testid={`task-index-${index}`}>{ index + 1 }</td>
      <td>{ task.description }</td>
      <td>{ task.date }</td>
      <td>{ task.status }</td>
      <td>
        <button
          type="button"
          onClick={ () => setIsModalVisible(true) }
        >
          Editar
        </button>
        { isModalVisible 
          && <TaskModal 
                isModalVisible={ isModalVisible } 
                setIsModalVisible={ setIsModalVisible } 
                task={ task } 
                funcionality="edit" 
              /> 
        }
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
