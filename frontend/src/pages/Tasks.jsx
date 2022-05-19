import React, { useEffect, useContext, useState } from 'react';
import TaskModal from '../components/TaskModal';
import TasksTable from '../components/TasksTable';
import GlobalContext from '../context/GlobalContext';

function Tasks() {
  const { getTasks } = useContext(GlobalContext);
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={ () => setIsModalVisible(true) }
      >
        Adicionar nova tarefa
      </button>
      { isModalVisible 
          && <TaskModal 
                isModalVisible={ isModalVisible } 
                setIsModalVisible={ setIsModalVisible } 
                funcionality="create"
              /> 
      }
      <TasksTable />
    </div>
  );
}

export default Tasks;