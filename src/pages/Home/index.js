import React,{useState, useEffect} from 'react'
import './Home.css'
import ListProjetos from '../../components/Home/ListProjetos'
import TopoLogo from '../../components/Home/TopoLogo'
import SubTopoLogo from '../../components/Home/subTopLogo'
import BottomProjetos from '../../components/Home/BottomProjetos'
import ButtonSubir from '../../assets/buttonSubir.svg'
import DescricaoProfissional from './DecricaoProfissional'
import buttonAlt from '../../assets/buttonAlt.svg'
import image1 from '../../assets/imaget1.jpg'
import image2 from '../../assets/Imaget2.svg'
import image3 from '../../assets/imaget3.jpg'
import image4 from '../../assets/imaget4.jpg'
import imagep1 from '../../assets/fotoFotogenica.jpg'
import imagep2 from '../../assets/fotoFotogenica3.jpg'
import imagep3 from '../../assets/fotoFotogenica23.jpg'

import $ from 'jquery';
import { getProjetos } from '../../funcoes/index'


function Home({match,history}){
    const [descricaoAtiva,setDescricaoAtiva] = useState(false);
    //aqui tem um array de projetos, onde só mostra a imagem principal de cada projeto
    const [projetos,setProjetos] = useState([{
      imagem_principal : image1,
      id : 0
    },{
      imagem_principal : image2,
      id : 1
    },{
      imagem_principal : image3,
      id : 2
    },{
      imagem_principal : image4,
      id : 3
    },{
      imagem_principal : imagep1,
      id : 4
    },
    {
      imagem_principal : imagep2,
      id : 5
    },
    {
      imagem_principal : imagep3,
      id : 6
    },
    {
      imagem_principal : imagep1,
      id : 7
    },
    {
      imagem_principal : image1,
      id : 8
    },
    {
      imagem_principal : image4,
      id : 9
    },
    {
      imagem_principal : image1,
      id : 10
    },{
      imagem_principal : image2,
      id : 11
    },{
      imagem_principal : image3,
      id : 12
    },{
      imagem_principal : image4,
      id : 13
    },{
      imagem_principal : imagep1,
      id : 14
    },
  ])
    const [user,setUser] = useState({descricao_pessoal : 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures'});
    
    // useEffect(()=>{
    //     async function loadPosts(){
    //         const projeto = await getProjetos();
    //         if(projeto){
    //             setProjetos(projeto.projeto);
    //             setUser(projeto.user);
    //         }
    //     }
    //     loadPosts();
       
    // },[match.params.id])

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
