import React from 'react';
import './configDash.css';
import {Link} from "react-router-dom"

export default function Configuracoes(props) {
  return (
        <div onClick={props.onClick} id={props.atived ? 'button-dash-option-ativo' :'button-dash-option'}>
            <img src={props.src} alt={`/${props.src}`} />
            <h6>{props.title}</h6>
        </div>
   
    );
}
