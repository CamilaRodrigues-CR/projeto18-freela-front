import styled from "styled-components";
import logo from "../assets/imgs/logo.png";
import { Link } from "react-router-dom";


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


// --------------------------- ESTILIZAÇÃO ----------------------

const ContainerHomePage = styled.div`
    background-color: whitesmoke;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

     img {
        width: 550px;
        margin-top: 60px;
        margin-bottom: 150px;
        
     }
     button {
        background-color: #bdb5d1;
        color: white;
        width: 250px;
        height: 40px;
        border: thistle 1px solid;
        border-radius: 10px;
        margin-top:20px;
     }
     

`