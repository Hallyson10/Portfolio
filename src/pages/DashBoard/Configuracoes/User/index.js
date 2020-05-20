import React,{useState} from 'react';

import './styles.css'
import Input from '../../../../components/User/Input'
import api from '../../../../service'
import Modal from '../../../../components/Modal/index'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
function User(props) {

  const [modalVisible,setModal] = useState(false);
  const [oldSenha,setOldSenha] = useState('');
  const [error,setError] = useState(false);
  const [opcao,setOpcao] = useState('');

  const id = localStorage.getItem('user_id');
  async function updateName(){
    try {
      const update = await api.put(`/config/${id}/nome`,{
        username : props.user.username
      })
      if(update){
        toast.success('Alterado com sucesso!')
      }
    } catch (error) {
      setError(true)
      setModal(true);
    }
  }
  async function updateEmail(){
    try {
      const update = await api.put(`/config/${id}/email`,{
        email : props.user.email,
        password : oldSenha
      })
      if(update){
        toast.success('Alterado com sucesso!')
      }
    } catch (error) {
      setError(true)
      setModal(true);
    }
  }
  async function updateSenha(){
    try {
      const update = await api.put(`/config/${id}/password`,{
        newPassword : props.user.password,
        oldPassword : oldSenha
      })
      if(update){
        toast.success('Alterado com sucesso!')
      }
    } catch (error) {
      setError(true)
      setModal(true);
    }
  }
  function confirm(){
    if(opcao === 'email'){
      updateEmail()
    }else if(opcao === 'senha'){
      updateSenha()
    }
    setModal(false);
  }
  function cancel(){
    setModal(false);
  }
  return (
      <div id='container-user'>
      <Modal
        visible={modalVisible}
        value={oldSenha}
        onChange={(value)=>setOldSenha(value)}
        error={error}
        confirm={confirm}
        cancel={cancel}
      />
      <ToastContainer/>
            <strong>Venha! vamos atualizar seus dados!</strong>
            <div id='inputs-user'>
                <Input 
                  title='Nome de usuário'
                  value={props.user.username}
                  onChange={(username)=>props.alterName(username)}
                  onClick={updateName}
                />
                <Input 
                  title='E-mail'
                  value={props.user.email}
                  onChange={(email)=>props.alterEmail(email)}
                  onClick={()=>{
                    setModal(true)
                    setOpcao('email');
                    }}
                />
                <Input 
                  title='Atualize sua senha'
                  security="true"
                  type='password'
                  value={props.user.password ? props.user.password : ''}
                  onChange={(password)=>props.alterPassword(password)}
                  placeholder='*********'
                  onClick={()=>{ 
                    setModal(true)
                    setOpcao('senha');
                    }}
                />
                <div id='logo-bottom-user'>
                </div>
            </div>
      </div>
  )
}

export default User;