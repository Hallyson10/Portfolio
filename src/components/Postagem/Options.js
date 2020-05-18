import React from 'react';
import './styles.css'

function Postagem(props){
  return (
      <div id='component-postagem-container'>
            <span id='title-postagem-option'>
            <h6>
            {props.trabalho.titulo}
            </h6>
            </span>
            <span id='container-button-postagem'>
                <button onClick={props.editar} id='button-option-postagem'>Editar</button>
                <button onClick={props.excluir} id='button-option-postagem-excluir'>Excluir</button>
            </span>
      </div>
  )
}

export default React.memo(Postagem);