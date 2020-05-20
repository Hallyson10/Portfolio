import React,{useState,useEffect} from 'react';
import './styles.css';
import Options from '../../../../components/Postagem/Options';
import { getProjetos,excluirProjeto } from '../../../../funcoes/index';
import imagep from '../../../../assets/Imaget2.svg';
import imagep1 from '../../../../assets/imaget3.jpg';
import imagep4 from '../../../../assets/imaget4.jpg';
import EditarProjeto from '../../../../components/EditarProjeto/index'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
function Postagem(props) {
        const [projetos,setProjetos] = useState([{
                id : 1,
                titulo : 'Lorem Ipsum is simply dummy',
                sub_titulo : 'Esta será a informação do subtitulo',
                descricao : 'Esta sera a decricao do trabalho',
                imagem_principal : imagep
        },{
                id : 2,
                titulo : 'Lorem Ipsum is simply dummy',
                sub_titulo : 'Esta será a informação do subtitulo',
                descricao : 'Esta sera a decricao do trabalho',
                imagem_principal : imagep1
        },{
                id : 3,
                titulo : 'Lorem Ipsum is simply dummy',
                sub_titulo : 'Esta será a informação do subtitulo',
                descricao : 'Esta sera a decricao do trabalho',
                imagem_principal : imagep4
        }]);
        const [projetoEdicao,setProjetoEdit] = useState(null);
        function removerProjeto(projeto_id){
                const user_id = localStorage.getItem('user_id');
                try {
                //if(excluirProjeto(user_id,projeto_id)){ verificação para exclusão na api
                if(true){
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
        //seta os projetos
        // useEffect(()=>{
        //         try {
        //         async function buscaProjetos(){
        //         const findProjeto = await getProjetos();
        //         console.log(findProjeto);
        //         if(findProjeto){
        //         setProjetos(findProjeto.projeto)
        //         }
        // }
        // buscaProjetos()
        // } catch (error) {
                
        // }
        // },[])
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