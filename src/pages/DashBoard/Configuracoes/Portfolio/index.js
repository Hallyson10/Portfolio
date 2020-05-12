import React,{useState,useMemo,useEffect,useCallback} from 'react';
import { Button } from 'react-bootstrap';
import FotoPrincipal from './FotoPrincipal'
import Input from '../../../../components/Portfolio/Input'
import ContainerImages from '../../../../components/Portfolio/Images/Container'
import logo_bottom from '../../../../assets/logo_bottom.svg'
import './styles.css'
import { salvarProjeto } from '../../../../funcoes/index'
function Portfolio(props) {
  const [fotoPrincipal,setFotoP] = useState(null);
  const [arrayImages,setImages] = useState([]);
  const [titulo,setTitulo] = useState('');
  const [subTitulo,setSubTitulo] = useState('');
  const [descricao,setDescricao] = useState('');
  const [data,setData] = useState('');

  
  const preview = useMemo(()=>{
       return fotoPrincipal ? URL.createObjectURL(fotoPrincipal) : null;
  },[fotoPrincipal]);

  function salvar(){
    const Data = {
        imagem : fotoPrincipal,
        titulo,
        subTitulo,
        descricao,
        date:data,
        prazo_conclusao : 0,
    }
    salvarProjeto(Data);
  }
  return (
    <div id='container-portfolio'>
     <div id='sub-container-portfolio'>
     <label>Atualize seus jobs!</label>
     <FotoPrincipal 
      setFoto0={(image) => {
      setImages([...arrayImages,image])
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
      value={subTitulo}
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
      value={data}
      onChange={(text)=>setData(text)}
      />
      <ContainerImages
      setFoto = {(image) => setImages([...arrayImages,image])}
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