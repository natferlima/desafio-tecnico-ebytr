import React, { useEffect, useContext, useState } from 'react';
import SortingAndFilters from '../components/SortingAndFilters';
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
      <SortingAndFilters />
      <TasksTable />
    </div>
  );
}

export default Tasks;