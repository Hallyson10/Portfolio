import React from 'react';

// import { Container } from './styles';
import './styles.css'
function InformacoesProjeto(props) {
  return (
  <div id='container-text-inform'>
        <strong>{props.informacoes.titulo}</strong>
        <label>{props.informacoes.sub_titulo}</label>
        <h5>{props.informacoes.descricao}</h5>
  </div>
  )
}

export default InformacoesProjeto;