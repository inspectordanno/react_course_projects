import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption} //converts to true boolean values
      onRequestClose={props.handleDeleteSelectedOption}
      contentLabel="Selected Option"
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button className="button" onClick={props.handleDeleteSelectedOption}>Okay</button>
    </Modal>
  );

export default OptionModal;