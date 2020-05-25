import api from '../service'
export function Logout(){
    localStorage.removeItem('user_id');
}
export function isAuth(){
    if(localStorage.getItem('user_id')){
        return true;
    }
    return true;
}

async function saveImages(projeto_id,imagem){
    const formDataImage = new FormData();
    formDataImage.append('imagem_projeto',imagem);
    await api.post(`/config/projeto/${projeto_id}/images`,formDataImage);
}
export async function salvarProjeto(data){
    try {
        const user_id = localStorage.getItem('user_id');
        const formData = new FormData();
        formData.append('imagem_principal',data.imagem_principal);
        formData.append('titulo',data.titulo);
        formData.append('sub_titulo',data.sub_titulo);
        formData.append('descricao',data.descricao);
        formData.append('data_realizacao',data.data_realizacao);
         const salvar = await api.post(`/config/${user_id}/projeto`,formData);
          if(salvar){
              const projeto_id = salvar.data.projeto.id;
         if(data.arrayImages.length >= 1){
            data.arrayImages.forEach((image)=>saveImages(projeto_id,image));
         }
          }
        
        return true;
    } catch (error) {
        return false;
    }
}
export async function getProjetos(page = 1){
    try {
        const projetos = await api.get(`/projetos?page=${page}`);
        const projeto = projetos.data.projeto;
        const user = projetos.data.user;
        return {projeto,user};
    } catch (error) {
        return false;
    }
}
export async function getProjeto(projeto_id){
        const getProjeto = await api.get(`/projeto/${projeto_id}`);
        if(getProjeto){
            return getProjeto.data;
        }
        return []
}

export async function excluirProjeto(user_id,projeto_id){
        try {
            const removed = await api.delete(`/config/${user_id}/projeto/${projeto_id}`);
            if(removed){
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
}
export async function editarProjeto(projeto,imagem_antiga){
        try {
            const formData = new FormData();
            formData.append('titulo',projeto.titulo);
            formData.append('sub_titulo', projeto.sub_titulo);
            formData.append('descricao', projeto.descricao);
            formData.append('imagem_antiga', imagem_antiga);
            formData.append('imagem_principal',projeto.imagem_principal)
            const update = await api.put(`/projeto/${projeto.id}`,formData,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            })
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
}