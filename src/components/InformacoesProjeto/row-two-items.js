import React from 'react';

// import { Container } from './styles';
import './styles.css'
function InformacoesProjeto(props) {
  return (
      <div id='row-grid'>
          <div id='line-grid-two'>
          {props.trabalhos[4] ? 
            <img id='image1-small' src={`http://localhost:3333/files/${props.trabalhos[4].id}`}  alt='image-1'/>:null
            }
          </div>
          <div id='line-grid2-two' >
          {props.trabalhos[5] ? 
            <img id='image1-small' src={`http://localhost:3333/files/${props.trabalhos[5].id}`}  alt='image-1'/>:null
            }
          </div>
      </div>
  )
}

export default InformacoesProjeto;