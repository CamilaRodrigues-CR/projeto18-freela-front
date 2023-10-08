import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import { ContainerHomePage } from "./styled";


export default function HomePage() {

    return (
        <ContainerHomePage>
            <img src={logo} alt="Logo da empresa" />
            <Link to={'/signin'} >
                <button> ACESSE SUA CONTA </button>
            </Link>
            <Link to={'/signup'}>
                <button> CADASTRE-SE </button>
            </Link>
        </ContainerHomePage>
    )
}


