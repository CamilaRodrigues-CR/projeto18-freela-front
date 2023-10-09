import { useNavigate, useParams } from "react-router-dom";
import apiProducts from "../constants/apiProducts";
import { useEffect } from "react";

export default function DeleteProduct() {
    const { id } = useParams()
    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    useEffect(() => {
        apiProducts.deleteProduct(token, id)
            .then(res => {
                alert("Produto excluído com sucesso!!")
                navigate('/myproducts')
                console.log(res.data)
            })
            .catch(err => console.log(err.response.data));

    }, []);
}