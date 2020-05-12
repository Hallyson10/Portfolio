import React from 'react';

// import { Container } from './styles';
import './styles.css'
function InformacoesProjeto(props) {
  return (
      <div id='row-grid'>
          <div id='line-grid-two'>
          {props.trabalhos[0].imagensProjeto[4] ? 
            <img id='image1-small' src={props.trabalhos[0].imagensProjeto[4].uri}  alt='image-1'/>:null
            }
          </div>
          <div id='line-grid2-two' >
          {props.trabalhos[0].imagensProjeto[5] ? 
            <img id='image1-small' src={props.trabalhos[0].imagensProjeto[5].uri}  alt='image-1'/>:null
            }
          </div>
      </div>
  )
}

export default InformacoesProjeto;