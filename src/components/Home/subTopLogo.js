import React from 'react';
import './styles.css'
// import { Container } from './styles';
import Icon from './Icons'
import behance from '../../assets/bh_mobile.svg'
import instagram from '../../assets/ig_mobile.svg'
import facebook from '../../assets/fb_mobile.svg'
import whatsapp from '../../assets/whats_mobile.svg'
import menos from '../../assets/mais.svg'
import mais from '../../assets/menos.svg'
export default function components(props) {
  return (
    <div id='descricao-home'>
            <div id='sub-descricao'>
                <div id='sub-sub-descricao'>
                    <div>
                    <h2>Design Gráfico</h2>
                    <h4>Graphic Designer</h4>
                    </div>
                <div>
                    <button 
                    onClick={props.ativaDescription} 
                    style={{borderRadius:20,background:'transparent',borderWidth:0}}
              >
                    <img id='button-ativa-des' src={props.descricaoAtiva ? menos : mais} alt="menos" /></button>
                </div>
                </div>
                <div id='sub2-sub2-descricao'>
                   <Icon src={behance} alt={`/${behance}`}/>
                   <Icon src={instagram} alt={`/${instagram}`}/>
                   <Icon src={facebook} alt={`/${facebook}`}/>
                   <Icon src={whatsapp} alt={`/${whatsapp}`}/>
                </div>
                
            </div>
        </div>
  );
}
