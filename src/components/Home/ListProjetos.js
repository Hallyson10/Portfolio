import React from 'react';
import './styles.css'
// import { Container } from './styles';
import Imagem from '../Imagens/index'
import {Spring} from 'react-spring/renderprops'

function components(props) {
  return (
      <>
      <div id='my-works-title'>
      <label>Meus trabalhos / My works</label>
      </div>
      <Spring
    from={{opacity:0}}
    to={{opacity:1}}
    config={{duration:1200,delay:50,tension:20}}
    >{
        Props => (
            <ul style={Props} id='list-images-projetos'>
            <li >
        {props.projetos.map((projeto)=>(
          <img key={projeto.id} onClick={()=>props.history.push(`/trabalho/${projeto.id}`)} 
          src={projeto.imagem_principal} />
        ))}
        </li>
        </ul>
      )
        }
    
    </Spring>
    </>
  );
}
export default React.memo(components);
 