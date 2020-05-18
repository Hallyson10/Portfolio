import React, { useState , useMemo,useEffect} from 'react';

// import { Container } from './styles';

function EditarProjeto(props) {
    const [foto,setFoto] = useState(null);
    
    const preview = useMemo(()=> {
        return foto ? URL.createObjectURL(foto) : null
    },[foto]);

    useEffect(()=>{
        setFoto(null);
    },[props.imagePrincipal])

  return( 
    <div id='image-principal-editar'>
    <label>
    <input type='file' 
        onChange={event => {
            setFoto(event.target.files[0])
            props.setFoto(event.target.files[0])
        }}
    />
            {foto ? <img src={preview} /> :
            <img
                src={`http://localhost:3333/files/${props.imagePrincipal}`}
            />}
        </label>
    </div>
  )
}

export default EditarProjeto;