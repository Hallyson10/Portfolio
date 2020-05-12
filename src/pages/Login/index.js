import React,{useState,useEffect} from 'react'
import './Login.css'
import api from '../../service'
import {isAuth,logout} from './auth'
function Login({history}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    useEffect(()=> {
        console.log('verificando se existe usuário logado, na tela login...')
        if(isAuth()){
            history.replace(`/dashboard/home`);}
    },[])

    async function handleSubmit(e){
        e.preventDefault();
        try {
        //     const res = await api.post('/login',{
        //         email : email,
        //         password : senha
        //     })
        //    localStorage.setItem('user_id',res.data.data.id);
           history.replace(`/dashboard/home`);
        } catch (error){
            alert('Senha ou e-mail incorreto!');
        }
    }
    return (
        <div className="login-container">
             <form onSubmit={handleSubmit} >
            
             <h4 className="login-cabecalho">LOGIN</h4>
             
             <div className="central-form">
             <div className="name-form">
             <h1>Olá Diego</h1>
                <h2>Faça login para continuar</h2>
             </div>
             <label>Email</label>
             
                <input 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite seu email"/>
            <label>Password</label>
                
                <input
                value={senha}
                type='password'
                onChange={e => setSenha(e.target.value)}
                security="true"
                 placeholder="Digite sua senha" />
            <h3>Esqueceu sua senha?</h3>
                <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;  