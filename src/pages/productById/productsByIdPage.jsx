import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import apiProducts from "../../constants/apiProducts";
import { ContainerProducts, ContainerProductsPage, ProductCard } from "./styled";

export default function ProductsPage() {
    const [product, setProduct] = useState(undefined);
    const token = localStorage.getItem('token');
    console.log(token)

    useEffect(() => {

        apiProducts.productsById(token)
            .then(resp => setProduct(resp.data))
            .catch(erro => console.log(erro.response.data));

    }, []);

    if (product === undefined) {
        return <div>Carregando...</div>;
    }


    return (
        <ContainerProductsPage>
            <Navbar />
            <ContainerProducts>
            {product.map(p => (
                        <ProductCard key={p.id}>
                            <img src={p.photo} alt={p.name} />
                            <p>{p.name}</p>
                            <p>R${(p.price / 100).toFixed(2)}</p>
                            <p>{p.categorie}</p>
                            <p>{p.description}</p>
                        </ProductCard>
                ))}
            </ContainerProducts>
        </ContainerProductsPage>
    )
}