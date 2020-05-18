import React from 'react';

import './styles.css'
import SmallGrid from './smallGrid'
function InformacoesProjeto(props) {
  return (
      <div id='row-grid'>
            <SmallGrid trabalhos={props.trabalhos}/>
            <div id='div2-row'>
            {props.trabalhos[3] ? 
            <img id='image1-small' src={`http://localhost:3333/files/${props.trabalhos[3].id}`}  alt='image-1'/>:null
            }
            </div>
      </div>
  )
}

export default InformacoesProjeto;