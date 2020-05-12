import React from 'react';
import {Spring} from 'react-spring/renderprops'

// import { Container } from './styles';
import './styles.css'
export default function Imagens(prop) {
  return (
    <Spring
    from={{opacity:0}}
    to={{opacity:1,marginTop:0}}
    config={{duration:800,delay:1000}}
    >
        {props => (
            <div style={props}>
            <img id='img-projetos' src={prop.src} alt={`/${prop.src}`} />
            </div>
        )}
    </Spring>
    
  );
}
