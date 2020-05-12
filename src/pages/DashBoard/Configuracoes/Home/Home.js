import React from 'react'
import './styles.css'
import { Button } from 'react-bootstrap';
import logo_bottom from '../../../../assets/logo_bottom.svg'
export default function Home(){
    return(
        <div id='body-home'>
          <div id='body-area1'>
            <label>Bem-vindo Diego!</label>
            <div id='container-input-bibliografia'>
              <h5>Digite abaixo aquela bibliografia que deixaria qualquer um babando.</h5>
              <textarea 
              autoFocus 
              maxLength={200}
              style={{maxHeight:100}}
              spellCheck 
              id='input-bibliografia' 
              placeholder='Bibliografia que deixaria qualquer um babando' 
              />
            </div>
            <div id='button-salvar-bibliografia'>
              <Button onClick={()=>alert('salvo!')} 
              style={{
              height:28,
              width:100,
              borderRadius:10,
              borderWidth:0,
              background:'#D4D3D4',
              color:"#FFF"}}
              size='sm' variant='primary' >Salvar</Button>
            </div>
          </div>
          <div id='body-area2'>
                  <img src={logo_bottom} alt='logo_bottom' />
          </div>
        </div>
    )
}