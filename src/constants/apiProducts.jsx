import axios from "axios";


function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function postProducts(body, token) {
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/products`,body, createConfig(token))    
    return promise;
}

function getProducts(token) {
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/products`, createConfig(token))    
    return promise;
}

function productsById(token, id){
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`, createConfig(token))    
    return promise;
}

function myProducts(token){
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/myProducts`, createConfig(token))    
    return promise;
}

function deleteProduct(token, id){
    const promise = axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`, createConfig(token))    
    return promise;
}


function patchProduct(token, id){
    const promise = axios.patch(`${import.meta.env.VITE_API_URL}/products/${id}`, createConfig(token))    
    return promise;
}


const apiProducts = {postProducts, getProducts, productsById, myProducts, deleteProduct, patchProduct};

export default apiProducts;
