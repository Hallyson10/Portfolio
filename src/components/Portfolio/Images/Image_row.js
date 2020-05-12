import React from 'react';
import './styles.css'

export default function ImageRow(props) {
  return (
    <div id='image-row'>
         <label id='sub-container-image-row' style={{backgroundImage : `url(${props.preview})` }} >
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
