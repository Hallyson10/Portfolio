import React,{useState} from 'react'
import './styles.css'
import { Button } from 'react-bootstrap';
import logo_bottom from '../../../../assets/logo_bottom.svg'
import api from '../../../../service'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
export default function Home(props){

  async function saveBibliografia(){
    try {
    // const id = await localStorage.getItem('user_id');
    // const res = await api.put(`config/${id}/description`,{
    //     descricao_pessoal : props.user.descricao_pessoal
    // })
    if(true){
      toast.success('Alteração realizada com sucesso!')
    }
    } catch (error) {
      toast.error("Ocorreu um erro inesperado!")
    }
  }
    return(
        <div id='body-home'>
        <ToastContainer/>
          <div id='body-area1'>
            <label>Bem-vindo {props.user ? props.user.username : null}!</label>
            <div id='container-input-bibliografia'>
              <h5>Digite abaixo aquela bibliografia que deixaria qualquer um babando.</h5>
              <textarea 
              autoFocus 
              value={props.user.descricao_pessoal ? props.user.descricao_pessoal : ''}
              onChange={(event)=>props.setBibliografia(event.target.value)}
              maxLength={900}
              style={{maxHeight:100}}
              spellCheck 
              id='input-bibliografia' 
              placeholder='Bibliografia que deixaria qualquer um babando' 
              />
            </div>
            <div id='button-salvar-bibliografia'>
            <button id='button-salvar' onClick={saveBibliografia}>Salvar</button>
            </div>
          </div>
          <div id='body-area2'>
                  <img src={logo_bottom} alt='logo_bottom' />
          </div>
        </div>
    )
}