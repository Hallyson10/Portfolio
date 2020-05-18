import React,{useState,useMemo,useEffect,useCallback} from 'react';
import { Button } from 'react-bootstrap';
import FotoPrincipal from './FotoPrincipal'
import Input from '../../../../components/Portfolio/Input'
import ContainerImages from '../../../../components/Portfolio/Images/Container'
import logo_bottom from '../../../../assets/logo_bottom.svg'
import './styles.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { salvarProjeto } from '../../../../funcoes/index'
function Portfolio(props) {
  const [imagem_principal,setFotoP] = useState(null);
  const [arrayImages,setImages] = useState([]);
  const [titulo,setTitulo] = useState('');
  const [sub_titulo,setSubTitulo] = useState('');
  const [descricao,setDescricao] = useState('');
  const [data_realizacao,setData] = useState('');
  const [salvo,setSalvo] = useState(false);
  
  const preview = useMemo(()=>{
       return imagem_principal ? URL.createObjectURL(imagem_principal) : null;
  },[imagem_principal]);
  useEffect(()=>{
    console.log(arrayImages)
},[arrayImages])
  function salvar(){
    const Data = {
        imagem_principal,
        titulo,
        sub_titulo,
        descricao,
        data_realizacao,
        arrayImages
    }
   
    if(imagem_principal !== null && titulo !== '' && sub_titulo !== '' && descricao !== '' && arrayImages.length >= 1){
      if(salvarProjeto(Data)){
        setFotoP(null);
        setImages([]);
        setTitulo('');
        setSubTitulo('');
        setData('');
        setDescricao('');
        setSalvo(true);
        toast.success('Parabéns! publicado com sucesso.')
      }else{
        toast.error('Ops! ocorreu um erro inesperado.')
      }
    }
  }
  return (
    <div id='container-portfolio'>
    <ToastContainer/>
     <div id='sub-container-portfolio'>
     <label id='title-port'>Atualize seus jobs!</label>
     <FotoPrincipal 
      setFoto0={(image) => {
      setFotoP(image)}}
      preview={preview}/>
     
     <Input 
     title='Coloque aqui um título inesquecível'
     placeholder='Título inesquecível'
     height={60}
     width= {400}
     value={titulo}
     onChange={(text)=>setTitulo(text)}
      />
     <Input 
     title='Aquele subtítulo impactante'
      placeholder='Subtítulo impactante'
      height={60}
      width= {400}
      resize='revert'
      value={sub_titulo}
      onChange={(text)=>setSubTitulo(text)}
      />
      <Input 
      title='E por último, aquele textinho interessante'
      placeholder='Texto interessante'
      height={80}
      width= {400}
      resize='revert'
      value={descricao}
      onChange={(text)=>setDescricao(text)}
      />
       <Input 
      title='Data'
      placeholder='00/00/0000'
      height={26}
      width= {100}
      resize='none'
      value={data_realizacao}
      onChange={(text)=>setData(text)}
      />
      <ContainerImages
      salvo={salvo}
      setFoto = {(fotoAnterior,image) => {
        if(image){
          if(fotoAnterior){
            console.log('entrou na exclusão')
          var array = arrayImages.filter((item)=>{
            if(item.name !== fotoAnterior.name){
              return item.name !== fotoAnterior.name
            }
          })
          setImages([...array,image])
        }else{
          setImages([...arrayImages,image])
        }
        }
        }}
      />
    <div id='button-salvar-post'>
              <Button onClick={salvar} 
              style={{
              height:28,
              width:100,
              borderRadius:10,
              borderWidth:0,
              background:'#D4D3D4',
              color:"#FFF"}}
              size='sm' variant='primary'
              >Salvar</Button>
            </div>
      <div id='bottom-portfolio'>
                  <img src={logo_bottom} alt='logo_bottom' />
          </div>
     </div>
     
    </div>
  );
}
export default React.memo(Portfolio)