import React,{useEffect,useState,useMemo} from 'react';

import './styles.css';
import ImageRow from '../Portfolio/Images/Image_row'
import Image from '../Portfolio/Images/Image'
import Input from '../Portfolio/Input'
import camera from '../../assets/camera.svg'
import ContainerFotos from '../../components/Portfolio/Images/Container'
import ImagePrincipalContainer from './FotoPrincipal'
import { getProjeto, editarProjeto} from '../../funcoes/index'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
function EditarProjeto(props) {
  const [imagemPrincipal,setImagemP] = useState(null);
  const [projeto,setProjeto] = useState(false);
  const [arrayImages,setImages] = useState([]);
  const [atualizou,setAtualizou] = useState(false);
  useEffect(()=>{
      setProjeto(props.projeto);
      const principal_foto = props.projeto.imagem_principal;
      setImagemP(principal_foto);
      async function buscaImages(){
        const busca = await getProjeto(props.projeto.id);
        const images = busca.images;
        setImages(images);
      }
      buscaImages();
  },[props.projeto,atualizou]);

  function updateProjeto(){
    toast.success("Alterado com sucesso!")
    // if(projeto.imagem_principal !== imagemPrincipal){
    //   const update = editarProjeto(projeto, imagemPrincipal);
    //   if(update){
        
    //   }
       setAtualizou(true);
    // }
  }
  return (
      <div id='container-editar-projeto'>
      <ToastContainer/>
      <div id='sub-container-editar'>
      <ImagePrincipalContainer
      setFoto={(foto)=>setProjeto({...projeto,imagem_principal : foto})}    
      imagePrincipal={imagemPrincipal}
      />
      <Input 
        value={projeto.titulo}
        onChange={(titulo)=>{setProjeto({...projeto,titulo : titulo})}}
        title='Título inesquecível'
      />
      <Input
        value={projeto.sub_titulo}
        onChange={(sub_titulo)=>{setProjeto({...projeto,sub_titulo : sub_titulo})}}
        title='Subtítulo impactante'
      />
      <Input
        onChange={(descricao)=>{setProjeto({...projeto,descricao : descricao})}}
        value={projeto.descricao}
        title='Textinho interessante'
      />
      <button id='button-salvar' onClick={updateProjeto}>Salvar</button>
      <div>
      
      </div>
        </div>
      </div>
  )
}

export default EditarProjeto;