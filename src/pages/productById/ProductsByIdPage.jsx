import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import apiProducts from "../../constants/apiProducts";
import { ContainerProducts, ContainerProductsPage, ProductCard } from "./styled.jsx";
import { useParams } from "react-router-dom";

export default function ProductsByIdPage() {
    const [product, setProduct] = useState(undefined);
    const token = localStorage.getItem('token');
    const { id } = useParams();

    useEffect(() => {
        apiProducts.productsById(token, id)
            .then(res => {
                setProduct(res.data)
                console.log(res.data)
            })
            .catch(err => {
                //console.log(err.response.data);
                console.log(err);
            });

    }, []);



    if (product === undefined) {
        return <div>Carregando...</div>;
    }


    return (
        <ContainerProductsPage>
            <Navbar />
            <ContainerProducts>
                
                    <ProductCard key={product.id}>
                        <img src={product.photo} alt={product.name} />
                        <p>Produto: {product.name}</p>
                        <p>Valor: R${(product.price / 100).toFixed(2)}</p>
                        <p>Categoria: {product.type}</p>
                        <p>Descrição: {product.description}</p>
                        
                    </ProductCard>
              
            </ContainerProducts>
        </ContainerProductsPage>
    )
}
