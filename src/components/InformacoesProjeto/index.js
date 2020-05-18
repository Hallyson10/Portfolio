import React from 'react';

import RollGrid from './rollGrid'
import RowTwo from './row-two-items'
import RowOneLine from './roll-one'
import './styles.css'
function InformacoesProjeto(props) {
  return (
        <div id='container-informacoes'>
        {
          props.trabalhos[0] ?
          <RowOneLine uri={props.trabalhos[0].id} />
          :
          null
        }
            <RollGrid trabalhos={props.trabalhos} />
            <RowTwo trabalhos={props.trabalhos}/>
            {
                props.trabalhos[6] ? 
                <RowOneLine uri={props.trabalhos[6].id } /> :
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