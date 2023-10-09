import axios from "axios";


function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function postProducts() {
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/products`, createConfig(token))    
    return promise;
}

function getProducts(token) {
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/products`, createConfig(token))    
    return promise;
}

function productsById(token){
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/products/:id`, createConfig(token))    
    return promise;
}

function myProducts(){
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/myProducts`, createConfig(token))    
    return promise;
}

function deleteProduct(){
    const promise = axios.delete(`${import.meta.env.VITE_API_URL}/products/:id`, createConfig(token))    
    return promise;
}


function patchProduct(){
    const promise = axios.patch(`${import.meta.env.VITE_API_URL}/products/:id`, createConfig(token))    
    return promise;
}


const apiProducts = {postProducts, getProducts, productsById, myProducts, deleteProduct, patchProduct};

export default apiProducts;
