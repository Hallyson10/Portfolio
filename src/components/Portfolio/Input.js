import React from 'react';

// import { Container } from './styles';
import './styles.css'
function Input(props) {
  return (
    <div id='container-input'>
    <div id='subcontainer-input-1'>
    <h4 style={{color:'#939496'}}>{props.title}</h4>
    <textarea 
              maxLength={200} 
              value={props.value}
              onChange={(event)=>props.onChange(event.target.value)}
              spellCheck 
              id='subcontainer-input-2' 
              placeholder={props.placeholder} 
              onBlur={props.onBlur}
              style={{resize:props.resize,
              maxHeight:70,
              minHeight:40,
              color:"#939496",
              height: props.height,
              width: props.width}}
              />
    </div>
    </div>
  );
}
export default React.memo(Input)