import React,{ useState,useEffect } from 'react';
import Modal from 'react-modal';
import './style.css'
// import { Container } from './styles';
const customStyles = {
  content : {
    width : '26%',
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
  }
};
function ComponentModal(props){
  useEffect(()=>{
    Modal.setAppElement('div');
  },[])
  return( 
    <Modal
    isOpen={props.visible}
    onAfterOpen={props.afterOpenModal}
    onRequestClose={props.closeModal}
    style={customStyles}
    contentLabel="Modal"
  >
    <h2 id='h2-modal'>Confirmação</h2>
    <div>Digite sua senha anterior para confirmar</div>
    <form id='form-modal'>
      <input 
      id='input-modal'
      type='password'
      value={props.value}
      onChange ={(event)=>props.onChange(event.target.value)}
        />
      <h5>{props.error ? 'senha incorreta, tente novamente.' : null}</h5>
      <button onClick={props.confirm} id='button-modal-confirm'>Confirmar</button>
      <button id='button-modal-cancel' onClick={props.cancel}>Cancelar</button>
      
    </form>
  </Modal>
  )
}

export default ComponentModal;