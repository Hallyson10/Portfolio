import React from 'react';
import {Spring} from 'react-spring/renderprops'
import './Home.css'

// import { Container } from './styles';

export default function Home(props) {
  return (
      <Spring
      from={{opacity:0}}
        to={{opacity:1}}
        config={{duration:500,delay:500}}
      >
          {Props => (
            <div style={Props}>
            <div id='descricao-home-option-container'>
            <div id='descricao-home-option'>
            <h6>{props.descricao}</h6>
            </div>
            </div>
            </div>
        )}
      </Spring>
  );
}
