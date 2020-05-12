import React from 'react';
import logo_topo from '../../assets/logo_top.svg'
import {Spring} from 'react-spring/renderprops'

// import { Container } from './styles';
import './styles.css'
export default function components() {
  return (
    <Spring
    from={{opacity:0,marginTop:-20}}
    to={{opacity:1,marginTop:0}}
    config={{duration:1200,delay:50,tension:20}}
    >
      {props => (
        <div style={props} >
        <img id='centro' src={logo_topo} alt='logo_topo' />
        </div>
      )}
    </Spring>
  );
}
