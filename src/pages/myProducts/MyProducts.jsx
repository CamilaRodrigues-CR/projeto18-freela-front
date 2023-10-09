import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import apiProducts from "../../constants/apiProducts";
import { ContainerProducts, ContainerProductsPage } from "../productById/styled";
import { ProductmyCard } from "./styled";
import { Link } from "react-router-dom";

export default function MyProductsPage() {
    const [myProduct, setMyProduct] = useState(undefined);
    const token = localStorage.getItem('token');

    useEffect(() => {
        apiProducts.myProducts(token)
            .then(res => {
                setMyProduct(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err.response.data));
    }, []);

    if (myProduct === undefined) {
        return <div>Você ainda não desapegou de nenhum produto em nosso site!!</div>;
    }

    const handlePatchClick = () => {
        alert("Pedido de alteração recebido!");

    }

    const handleDeleteClick = () => {
        alert("Pedido de deleção recebido!");

    }


    return (
        <ContainerProductsPage>
            <Navbar />
            <ContainerProducts>
                {myProduct.map(p => (
                    <ProductmyCard key={p.id}>
                        <img src={p.photo} alt={p.name} />
                        <p>{p.name}</p>
                        <p>R${(p.price / 100).toFixed(2)}</p>
                        <div>
                            <Link to={`/patch/${p.id}`}>
                                <button onClick={handlePatchClick}>Alterar produto para indisponível!</button>
                            </Link>
                            <Link to={`/delete/${p.id}`}>
                                <button onClick={handleDeleteClick}>Apagar este produto!</button>
                            </Link>

                        </div>
                    </ProductmyCard>
                ))}
            </ContainerProducts>
        </ContainerProductsPage>
    );
}
