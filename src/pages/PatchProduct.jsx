import { useNavigate, useParams } from "react-router-dom";
import apiProducts from "../constants/apiProducts";
import { useEffect } from "react";

export default function PatchProduct() {
    const { id } = useParams()
    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    useEffect(() => {
        apiProducts.patchProduct(token, id)
            .then(res => {
                alert("Produto alterado com sucesso!!")
                navigate('/myproducts')

                console.log(res.data)
            })
            .catch(err => console.log(err.response.data));

    }, []);
}