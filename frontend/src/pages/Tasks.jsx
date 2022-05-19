import React, { useEffect, useContext} from 'react';
import TasksTable from '../components/TasksTable';
import GlobalContext from '../context/GlobalContext';

function Tasks() {
  const { getTasks } = useContext(GlobalContext);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <TasksTable />
    </div>
  );
}

export default Tasks;