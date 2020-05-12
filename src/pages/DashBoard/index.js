import React,{useState,useEffect} from 'react';

import './dashboard.css'
import { Link } from 'react-router-dom'
import Drawer from '../Drawer/index';
import Home from '../DashBoard/Configuracoes/Home/Home';
import Portfolio from '../DashBoard/Configuracoes/Portfolio';
import User from '../DashBoard/Configuracoes/User/index'
const telas = {HOME:'home',PORTFOLIO:'portfolio',POSTAGEM:'postagem',USER:'user'};
function Index({history,match}){
  const [telaNow,setTela] = useState(telas.HOME);
  
   React.useEffect(()=>{
    console.log(match.params.id)

    return setTela(match.params.id);
  },[match.params.id])

  
  return(
    <div id="container-dash">
     <Drawer
      history={history}
       telaNow={telaNow}
       userId={match.params.id}
     />
     {telaNow === telas.HOME && <Home/>}
     {telaNow === telas.PORTFOLIO && <Portfolio/>}
     {telaNow === telas.USER && <User/>}
    </div>
  )
}
export default React.memo(Index)