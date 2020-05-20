import React,{useState,useEffect} from 'react'
import './Login.css'
import api from '../../service'
import {isAuth,logout} from './auth'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
function Login({history}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    useEffect(()=> {
        if(isAuth()){
            history.replace(`/dashboard/home`);}
    },[])

    async function handleSubmit(e){
        e.preventDefault();
        try {
            // const res = await api.post('/login',{
            //     email : email,
            //     password : senha
            // })
            // if(res.data.status){
            //   localStorage.setItem('user_id',res.data.id);
            //   history.replace(`/dashboard/home`);
            // }else{
            //     toast.error('senha ou e-mail incorretos!')
            // }
            if(email === 'degrande@degrande.com' && senha === '12345678') history.replace(`/dashboard/home`)
            else toast.error('senha ou e-mail incorretos!');
        } catch (error){
            toast.error('senha ou e-mail incorretos!')
        }
    }
    return (
        <div className="login-container">
        <ToastContainer/>
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