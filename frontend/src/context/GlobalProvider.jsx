import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    const tasksMock = [
      {
        _id: '62842f665f799c435643464e',
        description: 'estudar modulo 32.1',
        status: 'pendente',
        date: '1970-01-01T04:44:12.022Z',
      },
      {
        _id: '62942f665f799c435643464e',
        description: 'estudar modulo 33.1',
        status: 'pendente',
        date: '1970-01-01T04:44:12.022Z',
      },
      {
        _id: '63042f665f799c435643464e',
        description: 'estudar modulo 34.1',
        status: 'pendente',
        date: '1970-01-01T04:44:12.022Z',
      }
    ]
    setTasks(tasksMock);
  }

  const context = {
    tasks,
    getTasks,
  };

  return (
    <GlobalContext.Provider value={ context }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;