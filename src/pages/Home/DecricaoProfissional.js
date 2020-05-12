import React from 'react';
import {Spring} from 'react-spring/renderprops'
import './Home.css'

// import { Container } from './styles';

export default function Home() {
  return (
      <Spring
      from={{opacity:0}}
        to={{opacity:1}}
        config={{duration:500,delay:500}}
      >
          {props => (
            <div style={props}>
            <div id='descricao-home-option-container'>
            <div id='descricao-home-option'>
            <h6>Seja bem-vindo! Sou Dr. Hallyson Miranda, doutorado em acabar com dores de cabeça e noite mau dormidas, 
            desenvolvo seus projetos utilizando as melhores práticas de desenvolvimento para que você possa tanto ter um
            produto de software rápido e que seja também eficiente no que faz.</h6>
            </div>
            </div>
            </div>
        )}
      </Spring>
  );
}
