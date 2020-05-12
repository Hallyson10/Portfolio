import React from 'react';

import RollGrid from './rollGrid'
import RowTwo from './row-two-items'
import RowOneLine from './roll-one'
import './styles.css'
function InformacoesProjeto(props) {
  return (
        <div >
        {
          props.trabalhos[0].imagensProjeto[0] ?
          <RowOneLine uri={props.trabalhos[0].imagensProjeto[0].uri} />
          :
          null
        }
            <RollGrid trabalhos={props.trabalhos} />
            <RowTwo trabalhos={props.trabalhos}/>
            {
                props.trabalhos[0].imagensProjeto[6] ? 
                <RowOneLine uri={props.trabalhos[0].imagensProjeto[6].uri } /> :
                null
            }
            <div id='bottom-inform'>
                <div id='bottom-inform'>
                </div>
            </div>

        </div>
  )
}

export default InformacoesProjeto;