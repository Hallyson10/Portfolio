import React,{useState, useEffect} from 'react'
import './Home.css'
import ListProjetos from '../../components/Home/ListProjetos'
import TopoLogo from '../../components/Home/TopoLogo'
import SubTopoLogo from '../../components/Home/subTopLogo'
import BottomProjetos from '../../components/Home/BottomProjetos'
import ButtonSubir from '../../assets/buttonSubir.svg'
import DescricaoProfissional from './DecricaoProfissional'
import buttonAlt from '../../assets/buttonAlt.svg'
import $ from 'jquery';
import { getProjetos } from '../../funcoes/index'


function Home({match,history}){
    const [descricaoAtiva,setDescricaoAtiva] = useState(false);
    const [projetos,setProjetos] = useState([])
    const [user,setUser] = useState({});
    
    useEffect(()=>{
        async function loadPosts(){
            const projeto = await getProjetos();
            if(projeto){
                setProjetos(projeto.projeto);
                setUser(projeto.user);
            }
        }
        loadPosts();
       
    },[match.params.id])

    function ativaDescription(){
        descricaoAtiva ? setDescricaoAtiva(false) : setDescricaoAtiva(true);
    }
    
    $(document).ready(function () {
       $("#myBtn").css("display", "auto");
      $("div").scroll(function() {
          if($(this).scrollTop() === 0 ){
            $("#myBtn").css("display", "none");
          } else if($(this).scrollTop() > 1 ){
            $("#myBtn").css("display", "block");
          }
        });
      });
      function subir(){
        $("html, div").animate({scrollTop: 0}, 800);
      }

    return (
        <div className="home-container">
            <img id='myBtn' onClick={subir} src={ButtonSubir} alt='button'/>
        <TopoLogo/>
        <SubTopoLogo
            descricaoAtiva={descricaoAtiva}
            ativaDescription={ativaDescription}
        />
        {descricaoAtiva && <DescricaoProfissional descricao={user.descricao_pessoal} />}
        <ListProjetos history={history} projetos={projetos}/>
        <BottomProjetos/>
        <div onClick={()=>history.push(`/login/`)} id='sub-button'>
          <img src={buttonAlt} alt='buttonAlt' />
      </div>
        </div>
    )
}
export default Home;  
