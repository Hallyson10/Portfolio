import React,{useState,useEffect} from 'react';
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
import buttonProx from '../../assets/button_inform_prox.svg'
import buttonHome from '../../assets/button_inform_home.svg'
import $ from 'jquery';
import ButtonProjetos from '../../components/Home/BottomProjetos'
import { getProjeto } from '../../funcoes/index'
import { Link } from "react-router-dom"

import './styles.css'
const InformacoesProjeto = ({match,history}) => {
    const [trabalhos,setProjetos] = useState([{
      id : imaget1
    },{
      id : imaget2
    },{
      id : imaget3
    },{
      id : imaget4
    },{
      id : imaget2
    },{
      id : imaget1
    },{
      id : imaget4
    }])
    const [informacoes,setInfor] = useState({
      titulo : 'Lorem Ipsum is simply dummy',
      sub_titulo : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      descricao : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposedIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed'
    });
    // useEffect(()=>{
    //     async function buscaFotos(){
    //       const projeto = await getProjeto(match.params.id);
    //       setProjetos(projeto.images);
    //       setInfor(projeto.projeto)
    //     }
    //     buscaFotos();
    // },[]);

    $(document).ready(function () {
      $("#myBtn2").css("display", "auto");
      
    $("div").scroll(function() {
        if($(this).scrollTop() <= 5  ){
          $("#myBtn2").css("display", "none");
          $("#myBtnH").css("display", "block");
          $("#myBtnV").css("display", "block");
          $("#myBtnP").css("display", "block");
        } else if($(this).scrollTop() >= 5 ){
          $("#myBtn2").css("display", "block");
          $("#myBtnH").css("display", "none");
          $("#myBtnV").css("display", "none");
          $("#myBtnP").css("display", "none");
        }
      });
    });
    function subir(){
      $("html, div").animate({scrollTop: 0}, 800);
    }
  return (
  <div id='container-trabalho'>
   <img id='myBtn2' onClick={subir} src={ButtonSubir} alt='buttonSubir'/>
   <img  id='myBtnH' onClick={()=>history.goBack()} src={buttonHome} alt='home' />
   <img  id='myBtnV' onClick={()=>history.goBack()} src={buttonVoltar} alt='voltar' />
   <img  id='myBtnP' onClick={()=>history.goBack()} src={buttonProx} alt='próximo' />
      <TopoLogo/>
        <img id='image-topo-trabalho' src={imageTopoTrabalho} alt='image-topo' />
        <img id='image_topo_trab_mobile' src={image_topo_mobile} alt='image-top-mob'/>
    <Title informacoes={informacoes} />
    <RollGrid trabalhos={trabalhos} size={trabalhos.length}/>
    <ButtonProjetos/>
  </div>
  )
}

export default React.memo(InformacoesProjeto);
