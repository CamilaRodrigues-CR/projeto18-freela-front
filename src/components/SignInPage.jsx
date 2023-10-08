import logo from "../assets/imgs/logo.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignInPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <ContainerSigninPage>
            <img src={logo} alt="Logo da empresa" />

            <form>
                <input type="email" placeholder="    email" value={email} onChange={e => e.target.value} />
                <input type="password" placeholder="    senha" value={password} onChange={e => e.target.value} />

                <button> Entrar  </button>
                <Link to={'/signup'}>
                    <div> Ainda não tenho cadastro! </div>
                </Link>

            </form>
        </ContainerSigninPage>
    )
}


//----------------------------------- ESTILIZAÇÃO ---------------------------------------------
const ContainerSigninPage = styled.div`
    background-color: whitesmoke;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

     form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px;
        
     }
     input {
        width: 350px;
        height: 50px;
        margin-top: 20px;
        border-radius: 10px;
        border: thistle 1px solid;

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

     div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        color: #020d46;
        width: 250px;
        height: 20px;
        margin-top:20px;
      
     }
     
`