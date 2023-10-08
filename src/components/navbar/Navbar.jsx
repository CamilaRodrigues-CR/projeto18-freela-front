import { Link } from "react-router-dom";
import logo2 from "../../assets/imgs/logo2.png";
import { ContainerNavbar } from "./styled";

export default function Navbar() {

    return (
        <ContainerNavbar>
            <Link to={'/products'}>
                <img src={logo2} alt="Logo da empresa" />
            </Link>
            <div>
                myPage
                <button>x</button>
            </div>

        </ContainerNavbar>
    )
}

