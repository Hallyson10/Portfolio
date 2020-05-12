import React from 'react';
// import { Container } from './styles';
import './styles.css'
export default function components(props) {
  return (
        <div id='rs' onClick={()=>alert('ok')} >
                 <img id="img-rs" src={props.src} alt={props.alt} />
        </div> 
  )
}
