import React,{useEffect} from 'react';
import './drawer.css';
import logoDash from '../../assets/logoDash.svg'
import ButtonDash from '../DashBoard/Configuracoes/Button/ButtomConfig'
import home from '../../assets/home_desativado.svg'
import homeAtivo from '../../assets/home_ativado.svg'
import portfolio from '../../assets/portfolio_desativado.svg'
import portfolioAtivo from '../../assets/portfolio_ativado.svg'
import postagem from '../../assets/postagem_desativado.svg'
import postagemAtivo from '../../assets/postagem_ativado.svg'
import logout from '../../assets/logout_ativo.svg'
import user from '../../assets/user_desativado.svg'
import userAtivo from '../../assets/user_ativado.svg'
import {Link} from "react-router-dom"
import { Logout } from '../../funcoes/index'

const telas = {HOME:'home',PORTFOLIO:'portfolio',POSTAGEM:'postagem',USER:'user'};

function Drawer(props) {

     const sair = () => {
        Logout();
        props.history.replace('/home/')
    }
  return (
    <div id='drawer-dash'>
    <div id='dash-global-pai'>
    <div id='dash-logo'>
        <img src={logoDash} alt='logo-dash' />
        <h4>Diego De Grande</h4>
        <h6>Administrador</h6>
    </div>
    </div>
    <div id="dash-option-pai">
    <div id='dash-option'>
        <h4>DASHBOARD</h4>
    {props.telaNow !== telas.HOME ? 
    <Link to={`/dashboard/${telas.HOME}`}>
    <ButtonDash src={home} title='' />
    </Link>
     :
     <Link to={`/dashboard/${telas.HOME}`}>
    <ButtonDash atived src={homeAtivo} title='' />
    </Link>
    }       
     {props.telaNow === telas.PORTFOLIO ? 
     <Link to={`/dashboard/${telas.PORTFOLIO}`}>
     <ButtonDash 
        src={portfolioAtivo} 
        title='' 
        atived
     />
     </Link>
     :
     <Link to={`/dashboard/${telas.PORTFOLIO}`}>
     <ButtonDash 
        src={portfolio} title='' />
    </Link>
     }
    {props.telaNow === telas.POSTAGEM ?
    <ButtonDash src={postagemAtivo} title='' atived/> 
    :
    <Link to={`/dashboard/${telas.POSTAGEM}`}>
    <ButtonDash src={postagem} title='' />
    </Link>
    }
    </div>
    </div>
    <div id='line-dash'/>
    <div id='dash-option-pai'>
   
    <div id='dash-bottom'>
        <h4>USUÁRIO</h4>
        <div id='dash-bottom-logout'>
        <ul>
        {
            props.telaNow === telas.USER ?  
            <ButtonDash src={userAtivo} title='' atived />
            :
            <Link to={`/dashboard/${telas.USER}`}>
            <ButtonDash src={user} title='' />
            </Link>
        }

        <ButtonDash onClick={sair} src={logout} title='' />
        </ul>
        </div>
    </div>
    </div>
    </div>
    );
}
export default React.memo(Drawer)