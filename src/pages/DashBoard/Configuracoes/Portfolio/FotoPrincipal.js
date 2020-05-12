import React from 'react';
import camera from '../../../../assets/camera.svg'
import './styles.css'
export default function Portfolio(props) {
  
  return (
    <div id='container-foto-principal'>
      <label>Escolha a foto principal do seu portfólio com sabedoria</label>
      <label id='sub-container-foto' style={{backgroundImage : `url(${props.preview})` }} >
          <input 
          type='file' 
          onChange={event => {
          props.setFoto0(event.target.files[0])
          }
          } 
          />
          <img src={camera} alt='camera' />
      </label> 
    </div>
  );
}
