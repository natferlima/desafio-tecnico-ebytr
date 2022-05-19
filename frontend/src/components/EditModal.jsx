import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function EditModal({ isModalVisible, setIsModalVisible }) {
  const [ description, setDescription ] = useState('');
  const [ status, setStatus ] = useState('');

  return (
    <Modal
      isOpen={ isModalVisible }
      onRequestClose={ () => setIsModalVisible(false) }
    >
      <button onClick={ () => setIsModalVisible(false)}>Close</button>
      <input type="text" value={ description } onChange={ (e) => setDescription(e.target.value) }></input>
      <select
          value={ status }
          onChange={ (e) => setStatus(e.target.value) }
        >
          <option value="Em andamento">Em andamento</option>
          <option value="Pronto">Pronto</option>
        </select>
    </Modal>
  )
}

export default EditModal;
