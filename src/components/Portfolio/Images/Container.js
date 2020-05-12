import React,{useState,useMemo} from 'react';
import './styles.css';
import Image from './Image';
import ImageRow from './Image_row'
import imagep1 from '../../../assets/image1p.svg'
import imagep2 from '../../../assets/imagep2.svg'
import imagep3 from '../../../assets/imagep3.svg'
import imagep4 from '../../../assets/imagep4.svg'
import imagep5 from '../../../assets/imagep5.svg'
import imagep6 from '../../../assets/imagep6.svg'
import imagep7 from '../../../assets/imagep7.svg'
import imagep8 from '../../../assets/imagep8.svg'

export default function Portfolio(props) {
  const [foto1,setFoto1] = useState(null);
  const [foto2,setFoto2] = useState(null);
  const [foto3,setFoto3] = useState(null);
  const [foto4,setFoto4] = useState(null);
  const [foto5,setFoto5] = useState(null);
  const [foto6,setFoto6] = useState(null);
  const [foto7,setFoto7] = useState(null);
  const [foto8,setFoto8] = useState(null);

  const preview1 = useMemo(()=> {
    return foto1 ? URL.createObjectURL(foto1) : null
  },[foto1]);
  
  const preview2 = useMemo(()=> {
    return foto2 ? URL.createObjectURL(foto2) : null
  },[foto2]);

    const preview3 = useMemo(()=> {
      return foto3 ? URL.createObjectURL(foto3) : null
    },[foto3]);

      const preview4 = useMemo(()=> {
        return foto4 ? URL.createObjectURL(foto4) : null
      },[foto4]);

        const preview5 = useMemo(()=> {
          return foto5 ? URL.createObjectURL(foto5) : null
        },[foto5]);

          const preview6 = useMemo(()=> {
            return foto6 ? URL.createObjectURL(foto6) : null
          },[foto6]);

            const preview7 = useMemo(()=> {
              return foto7 ? URL.createObjectURL(foto7) : null
            },[foto7]);

              const preview8 = useMemo(()=> {
                return foto8 ? URL.createObjectURL(foto8) : null
              },[foto8]);
  return (
    <div id='container-images'>
    <span id='container-add-foto'>
    <label id='label-add-image'>Adicione as oito maravilhas fotográficas aqui!</label>
    </span>
      <div id='div-images-container'>
        <Image
        src={imagep1} 
        setFoto={(image)=>{
        setFoto1(image) //salvando imagem para preview
        props.setFoto(image) //enviando imagem para o array principal
        }
        }
        preview={preview1}
         />
        <div id='subcontainer-images'>
        <ImageRow 
        src={imagep2} 
        setFoto={(image)=>{
        setFoto2(image) //salvando imagem para preview
        props.setFoto(image) //enviando imagem para o array principal
        }}
        preview={preview2}
        />
        <ImageRow 
        src={imagep3}
        setFoto={(image)=>{
        setFoto3(image) //salvando imagem para preview
        props.setFoto(image) //enviando imagem para o array principal
        }}
        preview={preview3}
        />
        </div>
        <div id='subcontainer-images'>
        <ImageRow 
        src={imagep4}
        setFoto={(image)=>{
        setFoto4(image) //salvando imagem para preview
        props.setFoto(image) //enviando imagem para o array principal
        }}
        preview={preview4}
        />
        <ImageRow 
        src={imagep5}
        setFoto={(image)=>{
        setFoto5(image) //salvando imagem para preview
        props.setFoto(image) //enviando imagem para o array principal
        }}
        preview={preview5}
        />
        </div>
        <div id='subcontainer-images'>
        <ImageRow 
        src={imagep6}
        setFoto={(image)=>{
        setFoto6(image) //salvando imagem para preview
        props.setFoto(image) //enviando imagem para o array principal
        }}
        preview={preview6}
        />
        <ImageRow 
        src={imagep7}
        setFoto={(image)=>{
        setFoto7(image) //salvando imagem para preview
        props.setFoto(image) //enviando imagem para o array principal
        }}
        preview={preview7}
        />
        </div>
        <Image 
        src={imagep8}
        setFoto={(image)=>{
        setFoto8(image) //salvando imagem para preview
        props.setFoto(image) //enviando imagem para o array principal
        }}
        preview={preview8}
        />
      </div>
    </div>
  );
}
