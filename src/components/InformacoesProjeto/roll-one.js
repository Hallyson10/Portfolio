import React from 'react';
import './styles.css'

function InformacoesProjeto(props) {//tension :350

  return (
        <>
        {
            props.uri ? <img id='img-one-roll' src={props.uri} alt='image-5' /> 
            :
            null
        }
        </>
  )
}

export default InformacoesProjeto;