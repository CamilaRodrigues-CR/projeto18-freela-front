import { useParams } from "react-router-dom";
import apiProducts from "../constants/apiProducts";

export default function PatchProduct() {
    const { id } = useParams()

    useEffect(() => {
        apiProducts.patchProduct(token, id)
            .then(res => {
                alert("Produto alterado com sucesso!!")
                console.log(res.data)
            })
            .catch(err => console.log(err.response.data));

    }, []);
}