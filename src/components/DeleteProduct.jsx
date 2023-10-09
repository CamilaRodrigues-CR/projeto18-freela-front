import { useParams } from "react-router-dom";
import apiProducts from "../constants/apiProducts";

export default function DeleteProduct() {
    const { id } = useParams()

    useEffect(() => {
        apiProducts.deleteProduct(token, id)
            .then(res => {
                alert("Produto excluído com sucesso!!")
                console.log(res.data)
            })
            .catch(err => console.log(err.response.data));

    }, []);
}