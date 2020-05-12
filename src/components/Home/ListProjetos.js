import React from 'react';
import './styles.css'
// import { Container } from './styles';
import Imagem from '../Imagens/index'
import {Spring} from 'react-spring/renderprops'

export default function components(props) {
  return (
      <>
      <Spring
    from={{opacity:0}}
    to={{opacity:1}}
    config={{duration:1200,delay:50,tension:20}}
    >{
        Props => (
            <ul style={Props} id='list-images-projetos'>
        {props.projetos.map((projeto)=>(
        <li key={projeto.idProjeto}>
            {
                projeto.imagensProjeto.map((item)=>(
                    <img key={item.ref} onClick={()=>props.history.push('/trabalho/id')} id='images' src={item.uri} />
                ))
            }
        </li>
    ))}
    </ul>
        )
    }
    
    </Spring>
    </>
  );
}
