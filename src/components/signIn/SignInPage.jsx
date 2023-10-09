import logo from "../../assets/imgs/logo.png"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiAuth from "../../constants/apiAuth";
import { ContainerSigninPage } from "./styled";

export default function SignInPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({email: "", password: ""})

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function signin (e){
        e.preventDefault()
        
        apiAuth.signIn(form)
        .then(res =>{
            const token = res.data.token;
            localStorage.setItem('token', token);

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

/*
// Para armazenar o token:
const token = res.data.token;
localStorage.setItem('token', token);

// Para recuperar o token:
const token = localStorage.getItem('token');

// Para remover o token:
localStorage.removeItem('token');

//para enviar o token
const config = {
	headers: {
		"Authorization": "Bearer token_recebido"
	}
}
*/