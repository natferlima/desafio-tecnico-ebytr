import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import GlobalContext from './GlobalContext';
import axios from 'axios';

function GlobalProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [original, setOriginal] = useState([]);
  const [tasksFilter, setTasksFilter] = useState([]);
  const [aux, setAux] = useState(null);

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const getTasks = async () => {
    try{
      const { data } = await API.get('/tasks');
      setTasks(data);
      setOriginal(data);
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

  const createTask = async (description, status) => {
    try{
      await API.post('/tasks', { description, status, date: new Date()});
      const { data } = await API.get('/tasks');
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }

  const editTask = async (description, status) => {
    try{
      await API.put('/tasks', { description, status, date: new Date()});
      const { data } = await API.get('/tasks');
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log('tasksFilter mudou, altera tasks');
    setTasks(tasksFilter);
  }, [aux]);

  const context = {
    tasks,
    getTasks,
    removeTask,
    createTask,
    editTask,
    setTasks,
    tasksFilter,
    setTasksFilter,
    aux,
    setAux,
    original,
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