import React from 'react';

import './styles.css'

export default function Porfolio(props) {
  return (
    <div id='image'>
      <label id='sub-container-image' style={{backgroundImage : `url(${props.preview})` }} >
          <input 
          type='file' 
          onChange={event => {
          props.setFoto(event.target.files[0])
          }
          } 
          />
          <img src={props.src} alt='camera' />
      </label> 
    </div>
  );
}
