import React from 'react';
import './styles.css';
import { Button } from 'react-bootstrap';
function Input(props) {
  return (
    <div id='container-input-user'>
    <label id='title-input-user'>{props.title}</label>
    <div>
    <input 
              maxLength={200} 
              value={props.value}
              onChange={(event)=>props.onChange(event.target.value)}
              spellCheck 
              type={props.type}
              className='subcontainer-input-2user' 
              placeholder={props.placeholder} 
              />
    </div>
    <div id='button-input-user'>
    <button id='button-salvar' onClick={props.onClick}>Salvar</button>
            </div>
            
    </div>
  );
}
export default React.memo(Input)