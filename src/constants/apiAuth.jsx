import axios from "axios";

function signIn (body){
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/signin`, body);    
    return promise;
}

function signUp (body){
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/signup`, body)    
    return promise;
}


function signOut(){
    const promise = axios.delete(`${import.meta.env.VITE_API_URL}/signout`)    
    return promise;
}

const apiAuth = {signIn, signUp, signOut};

export default apiAuth;