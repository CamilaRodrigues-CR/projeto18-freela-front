import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { ContainerProducts } from "../Products/styled";
import apiProducts from "../../constants/apiProducts";
import { ContainerMyPage } from "./styled";

export default function MyProductsPage() {
    const [myProduct, setMyProduct] = useState(undefined);
    const token = localStorage.getItem('token');

    useEffect(() => {
        apiProducts.myProducts(token)
            .then(res => {
                setMyProduct(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err.response.data))

    }, []);

    if (myProduct === undefined) {
        return <div>Carregando...</div>;
    }


    return (
        <ContainerProducts>
            <Navbar />
            <ContainerMyPage>
            {myProduct.map(p => (
                    <Link key={p.id} to={`/products/${p.id}`}>
                        <ProductCard>
                            <img src={p.photo} alt={p.name} />
                            <p>{p.name}</p>
                            <p>R${(p.price / 100).toFixed(2)}</p>
                        </ProductCard>
                    </Link>
                ))}
            </ContainerMyPage>
        </ContainerProducts>
    )
}