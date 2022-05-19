import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';
import axios from 'axios';

function GlobalProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const getTasks = async () => {
    try{
      const { data } = await API.get('/tasks');
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }

  const removeTask = async (id) => {
    try{
      await API.delete(`/tasks/${id}`);
      const { data } = await API.get('/tasks');
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }

  const context = {
    tasks,
    getTasks,
    removeTask,
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