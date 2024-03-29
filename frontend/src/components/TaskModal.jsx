import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import GlobalContext from '../context/GlobalContext';

// https://github.com/reactjs/react-modal/issues/632
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

function TaskModal({ isModalVisible, setIsModalVisible, task, funcionality }) {
  const { createTask, editTask } = useContext(GlobalContext);
  const [ description, setDescription ] = useState('');
  const [ status, setStatus ] = useState('Pendente');

  const valueEdit = () => {
    if ( funcionality === "edit") {
      setDescription(task.description);
      setStatus(task.status);
    } 
  }

  const edit = () => {
    editTask(description, status, task._id);
    setIsModalVisible(false);
  }

  const create = () => {
    createTask(description, status);
    setIsModalVisible(false);
  }

  useEffect(() => {
    valueEdit();
  }, []);

  // https://www.npmjs.com/package/react-modal
  return (
    <Modal
      isOpen={ isModalVisible }
      onRequestClose={ () => setIsModalVisible(false) }
    >
      <button 
        onClick={ () => setIsModalVisible(false)}
      >
        Close
      </button>
      <input 
        type="text" 
        value={ description } 
        onChange={ (e) => setDescription(e.target.value) }
      />
      <select
        value={ status }
        onChange={ (e) => setStatus(e.target.value) }
      >
        <option value="Pendente">Pendente</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Pronto">Pronto</option>
      </select>
      { funcionality === "create" 
        && <button
              type="button"
              onClick={ () => create() }
            >
              Enviar
            </button>
      }
      { funcionality === "edit" 
        && <button
              type="button"
              onClick={ () => edit() }
            >
              Enviar
            </button>
      }
    </Modal>
  )
}

export default TaskModal;
