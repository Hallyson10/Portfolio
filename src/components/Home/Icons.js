import React from 'react';
// import { Container } from './styles';
import './styles.css'
export default function components(props) {
  return (
        <div id='rs' >
        <a target='_blank'href={props.href}>
                 <img id="img-rs" src={props.src} alt={props.alt} />
        </a>
        </div> 
  )
}
