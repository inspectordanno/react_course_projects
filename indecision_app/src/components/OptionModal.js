import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption} //converts to true boolean values
      onRequestClose={props.handleDeleteSelectedOption}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleDeleteSelectedOption}>Okay</button>
    </Modal>
  );

export default OptionModal;