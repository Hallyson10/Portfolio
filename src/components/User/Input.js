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
              <Button onClick={props.onClick} 
              style={{
              height:28,
              backgroundColor:'black',
              width:100,
              borderRadius:10,
              borderWidth:0,
              background:'#D4D3D4',
              color:"#FFF"}}
              size='sm' variant='primary' >Salvar</Button>
            </div>
            
    </div>
  );
}
export default React.memo(Input)