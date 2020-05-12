export const isAuth = () => {
    const verify = localStorage.getItem('user_id');
    if(verify){
        return true;
    }
    return false;
};
