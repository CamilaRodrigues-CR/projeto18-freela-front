import logo from "../assets/imgs/logo.png"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import apiRoute from "../constants/apiRoute";

export default function SignInPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({email: "", password: ""})

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function signin (e){
        e.preventDefault()
        
        apiRoute.signIn(form)
        .then(res =>{

            navigate('/products')
        })
        .catch(err=>{
            console.log(err.response.data)
            alert(err.response.data)
        })
    }

    return (
        <ContainerSigninPage>
            <Link to={'/'}>
            <img src={logo} alt="Logo da empresa" />
            </Link>

            <form onSubmit={signin}>
                <input name="email" placeholder="  email" type="email" value={form.email} onChange={handleForm} />
                <input name="password" placeholder="  senha" type="password" value={form.password} onChange={handleForm} />

                <button type="submit"> Entrar  </button>
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