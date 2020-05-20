import React from 'react';

import './styles.css'
function InformacoesProjeto(props) {
  try{
    return (
      <div id='container-small-grid'>
        <div id='div-big-small'>
        
          {props.trabalhos[1] ? 
          <img id='image-0' src={props.trabalhos[1].id}  alt='image-1'/>:null
          }
        </div>
        <div id='div-horizontal-small'>
            <div id='p-div'>
            {props.trabalhos[2] ? 
            <img id='image1-small' src={props.trabalhos[2].id}  alt='image-1'/>:null
            }
            </div>
            
        </div>
      </div>
  )
  }catch{
    return <></>
  }
 
}

export default InformacoesProjeto;