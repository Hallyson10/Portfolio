import React,{useState, useEffect} from 'react'
import './Home.css'
import ListProjetos from '../../components/Home/ListProjetos'
import TopoLogo from '../../components/Home/TopoLogo'
import SubTopoLogo from '../../components/Home/subTopLogo'
import BottomProjetos from '../../components/Home/BottomProjetos'
import imaget1 from '../../assets/imaget1.jpg'
import imaget2 from '../../assets/Imaget2.svg'
import imaget3 from '../../assets/imaget3.jpg'
import imaget4 from '../../assets/imaget4.jpg'
import ButtonSubir from '../../assets/buttonSubir.svg'
import DescricaoProfissional from './DecricaoProfissional'
import buttonAlt from '../../assets/buttonAlt.svg'
import $ from 'jquery';

function Home({match,history}){
    const [descricaoAtiva,setDescricaoAtiva] = useState(false);
    const [projetos,setProjetos] = useState([
        {imagensProjeto : [
        {uri:imaget1,ref:'0'},
        {uri:imaget2,ref:'1'},
        {uri:imaget4,ref:'2'},{uri:imaget3,ref:'10'}],
        descricao:'Projeto desenvolvido em comemoração a pascoa',
        titulo:'',
        idProjeto:1,
        dataRealização:0}
    ])
    
    useEffect(()=>{
        console.log(history)
        $("html, div").animate({scrollTop: 0}, 800);
        async function loadPosts(){
            console.log(match.params.id);
        }
    },[match.params.id])

    function ativaDescription(){
        descricaoAtiva ? setDescricaoAtiva(false) : setDescricaoAtiva(true);
    }
    
    $(document).ready(function () {
        //$("#myBtn").css("display", "auto");
      $("div").scroll(function() {
          if($(this).scrollTop() == 0 || $(this).scrollTop() <= 100 ){
            $("#myBtn").css("display", "none");
          } else if($(this).scrollTop() >= 0 ){
            $("#myBtn").css("display", "block");
          }
        });
      $("#myBtn").click(function() {
          $("html, div").animate({scrollTop: 0}, 800);
         });
      });

    return (
        <div className="home-container">
            <img id='myBtn' src={ButtonSubir} alt='buttonSubir'/>
        <TopoLogo/>
        <SubTopoLogo
            descricaoAtiva={descricaoAtiva}
            ativaDescription={ativaDescription}
        />
        {descricaoAtiva && <DescricaoProfissional />}
        <ListProjetos history={history} projetos={projetos}/>
        <BottomProjetos/>
        <div onClick={()=>history.push(`/login/`)} id='sub-button'>
          <img src={buttonAlt} alt='buttonAlt' />
      </div>
        </div>
    )
}
export default Home;  
