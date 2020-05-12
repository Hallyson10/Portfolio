import React,{useState} from 'react';
import imageTopoTrabalho from '../../assets/topoImageTrabalho.svg'
import image_topo_mobile from '../../assets/topo_trabalho_mobile.svg'
import RollGrid from '../../components/InformacoesProjeto/index'
import Title from '../../components/InformacoesProjeto/textInform'
import TopoLogo from '../../components/InformacoesProjeto/TopoInform'
import imaget1 from '../../assets/imaget1.jpg'
import imaget2 from '../../assets/Imaget2.svg'
import imaget3 from '../../assets/imaget3.jpg'
import imaget4 from '../../assets/imaget4.jpg'
import ButtonSubir from '../../assets/buttonSubir.svg'
import buttonVoltar from '../../assets/voltar.svg'
import $ from 'jquery';

import './styles.css'
const InformacoesProjeto = ({match,history}) => {
    console.log(match);
    const [trabalhos,setProjetos] = useState([
        {imagensProjeto : [
        {uri:imaget1,ref:'0'},
        {uri:imaget2,ref:'1'},
        {uri:imaget3,ref:'1'},
        {uri:imaget2,ref:'1'},
        {uri:imaget4,ref:'1'},
        {uri:imaget2,ref:'1'},
        {uri:imaget4,ref:'2'},{uri:imaget3,ref:'10'}],
        descricao:'Projeto desenvolvido em comemoração a pascoa',
        titulo:'',
        idProjeto:1,
        dataRealização:0}
    ])
    $(document).ready(function () {
      $("#myBtn2").css("display", "auto");
    $("div").scroll(function() {
        if($(this).scrollTop() == 0 || $(this).scrollTop() <= 100 ){
        } else if($(this).scrollTop() >= 0 ){
        }
      });
    $("#myBtn2").click(function() {
        $("html, div").animate({scrollTop: 0}, 800);
       });
    });
  return (
  <div id='container-trabalho'>
   <img id='myBtn2' src={ButtonSubir} alt='buttonSubir'/>
   <img onClick={()=>history.goBack()} id='myBtnV' src={buttonVoltar} alt='voltar' />
      <TopoLogo/>
        <img id='image-topo-trabalho' src={imageTopoTrabalho} alt='image-topo' />
        <img id='image_topo_trab_mobile' src={image_topo_mobile} alt='image-top-mob'/>
    <Title/>
    <RollGrid trabalhos={trabalhos} size={trabalhos[0].imagensProjeto.length}/>
    
  </div>
  )
}

export default InformacoesProjeto;