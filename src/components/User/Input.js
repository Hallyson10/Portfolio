import React from 'react';

import './styles.css'
function Input(props) {
  return (
    <div id='container-input-user'>
    <div id='subcontainer-input-1user'>
    <label style={{color:'#939496'}}>{props.title}</label>
    <input 
              maxLength={200} 
              value={props.value}
              onChange={(event)=>props.onChange(event.target.value)}
              spellCheck 
              id='subcontainer-input-2user' 
              placeholder={props.placeholder} 
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