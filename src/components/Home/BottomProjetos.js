import React from 'react';
import './styles.css'
import whatsapp from '../../assets/whatsapp.svg'
import facebook from '../../assets/facebook2.svg'
import instagram from '../../assets/instagram.svg'
import behance from '../../assets/behance.svg'
import footer from '../../assets/new_logo_button.svg'
import Icons from './Icons'

export default function components() {
  return (
    <div id="mae">
      <div id="elemento1">
            <img id='footer' src={footer} alt="behance" />
      </div>
      <div id="elemento2">
      <Icons src={behance} alt={`/${behance}`} />
      <Icons src={instagram} alt={`/${instagram}`} />
      <Icons src={facebook} alt={`/${facebook}`} />
      <Icons src={whatsapp} alt={`/${whatsapp}`} />
      </div>
  </div>
    );
}

