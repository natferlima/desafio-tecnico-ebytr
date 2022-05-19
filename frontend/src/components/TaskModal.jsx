import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import GlobalContext from '../context/GlobalContext';

Modal.setAppElement('#root');

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

  useEffect(() => {
    valueEdit();
  }, []);

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
              onClick={ () => createTask(description, status) }
            >
              Enviar
            </button>
      }
      { funcionality === "edit" 
        && <button
              type="button"
              onClick={ () => editTask(description, status) }
            >
              Enviar
            </button>
      }
    </Modal>
  )
}

export default TaskModal;
