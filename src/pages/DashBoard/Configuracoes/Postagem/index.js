import React,{useState,useEffect} from 'react';
import './styles.css';
import Options from '../../../../components/Postagem/Options';
import { getProjetos,excluirProjeto } from '../../../../funcoes/index';
import EditarProjeto from '../../../../components/EditarProjeto/index'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
function Postagem(props) {
        const [projetos,setProjetos] = useState([]);
        const [projetoEdicao,setProjetoEdit] = useState(null);
        function removerProjeto(projeto_id){
                const user_id = localStorage.getItem('user_id');
                try {
                if(excluirProjeto(user_id,projeto_id)){
                toast.success('removido com sucesso!')
                const array = projetos.filter((item)=>{
                return item.id !== projeto_id;
                })
                setProjetos(array);
                setProjetoEdit(null);
                }
                } catch (error) {
                toast.error('Infelizmente ocorreu um erro inesperado ao tentar salvar,verifique o tamanho dos bits da imagem!')
                }
        }
        
        useEffect(()=>{
                try {
                async function buscaProjetos(){
                const findProjeto = await getProjetos();
                console.log(findProjeto);
                if(findProjeto){
                setProjetos(findProjeto.projeto)
                }
        }
        buscaProjetos()
        } catch (error) {
                
        }
        },[])
  return (
        <div id='container-postagem' >
        <ToastContainer/>
                <div id='sub-container-postagem'>
                    <label>Edite ou exclua suas postagens</label>
                    <ul>
                    <li>
                            {
                                    projetos.map((trabalho)=>(
                                            <Options 
                                            editar={()=>{
                                                    setProjetoEdit(trabalho);
                                            }}
                                            excluir={()=>removerProjeto(trabalho.id)}
                                             key={trabalho.id} trabalho={trabalho}/> 
                                          
                                    ))
                            }
                        </li>
                    </ul>
                </div>
                <div id='sub-container2-postagem'>
                {projetoEdicao && <EditarProjeto
                        projeto = {projetoEdicao}
                />}
                </div>
        </div>
        )
}

export default Postagem;