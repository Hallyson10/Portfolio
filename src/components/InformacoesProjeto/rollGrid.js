import React from 'react';

import './styles.css'
import SmallGrid from './smallGrid'
function InformacoesProjeto(props) {
  return (
      <div id='row-grid'>
            <SmallGrid trabalhos={props.trabalhos}/>
            <div id='div2-row'>
            {props.trabalhos[0].imagensProjeto[3] ? 
            <img id='image1-small' src={props.trabalhos[0].imagensProjeto[3].uri}  alt='image-1'/>:null
            }
            </div>
      </div>
  )
}

export default InformacoesProjeto;