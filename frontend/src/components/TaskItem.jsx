import React,{ useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import EditModal from './EditModal';

function TaskItem({ task, index }) {
  const [ isModalVisible, setIsModalVisible ] = useState(false);
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
          onClick={ () => setIsModalVisible(true) }
        >
          Editar
        </button>
        { isModalVisible 
          && <EditModal isModalVisible={ isModalVisible } setIsModalVisible={ setIsModalVisible } /> }
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
