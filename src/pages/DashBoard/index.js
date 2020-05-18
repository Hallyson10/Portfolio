import React,{ useState, useEffect } from 'react';

import './dashboard.css'
import { Link } from 'react-router-dom'
import Drawer from '../Drawer/index';
import Home from '../DashBoard/Configuracoes/Home/Home';
import Portfolio from '../DashBoard/Configuracoes/Portfolio';
import Postagem from '../DashBoard/Configuracoes/Postagem'
import User from '../DashBoard/Configuracoes/User/index';
import api from '../../service'


const telas = {HOME:'home',PORTFOLIO:'portfolio',POSTAGEM:'postagem',USER:'user'};
function Index({history,match}){
  const [telaNow,setTela] = useState(telas.HOME);
  const [user,setUser] = useState(null);
   useEffect(()=>{
    const identificador = localStorage.getItem('user_id');
     async function buscaUser(){
      try {
        if(!user){
          const usuario = await api.get(`/user/${identificador}`);
          setUser(usuario.data.user);
        }
      } catch (error) {
        console.log(error)
      }
     }
    buscaUser();
    return setTela(match.params.id);
  },[match.params.id])
  
  return(
    <div id="container-dash">
    { user ? 
    <>
    <Drawer
      history={history}
       telaNow={telaNow}
       userId={match.params.id}
     />
     {telaNow === telas.HOME && <Home
      setBibliografia={(descricao_pessoal)=>setUser({...user,descricao_pessoal})}
      user = {user}
     />}
     {telaNow === telas.PORTFOLIO && <Portfolio

       user = {user}
     />}
     {telaNow === telas.USER && <User
       alterName={(username)=>setUser({...user,username})}
       alterEmail={(email)=>setUser({...user,email})}
       alterPassword={(password)=>setUser({...user,password})}
       user = {user}
     />}
     {telaNow === telas.POSTAGEM && <Postagem
      user_id = {match.params.id}
     />}
     </>
     : null
     }
    </div>
  )
}
export default React.memo(Index)