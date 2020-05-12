import api from '../service'
export function Logout(){
    localStorage.removeItem('user_id');
    console.log('saiu!')
}
export async function salvarProjeto(data){
    try {
        const user_id = localStorage.getItem('user_id');
        const formData = new FormData();
          formData.append('imagem',data.imagem,data.imagem.type);
         formData.append('titulo',data.titulo);
         formData.append('subTitulo',data.subTitulo);
          formData.append('data',data.date);
         formData.append('usuario_id', 2);
        formData.append('prazo_conclusao','');
        //const salvar = await api.post('/projects',formData);
       console.log(...formData) 
    } catch (error) {
        console.log(error)
        return false;
    }
   
}