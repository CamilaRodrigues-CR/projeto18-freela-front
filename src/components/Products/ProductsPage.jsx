import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import apiProducts from "../../constants/apiProducts";
import { ContainerProducts, ContainerProductsPage, ProductCard } from "./styled";
import { Link } from "react-router-dom";

export default function ProductsPage() {
    const [products, setProducts] = useState(undefined);
    const token = localStorage.getItem('token');
    console.log(token)

    useEffect(() => {

        apiProducts.getProducts(token)
            .then(resp => setProducts(resp.data))
            .catch(erro => {
                console.log(erro.response.data)
                console.log(token)
            });

    }, []);

    if (products === undefined) {
        return <div>Carregando...</div>;
    }


    return (
        <ContainerProductsPage>
            <Navbar />
            <ContainerProducts>
            {products.map(p => (
                    <Link key={p.id} to={`/products/${p.id}`}>
                        <ProductCard>
                            <img src={p.photo} alt={p.name} />
                            <p>{p.name}</p>
                        </ProductCard>
                    </Link>
                ))}
            </ContainerProducts>
        </ContainerProductsPage>
    )
}