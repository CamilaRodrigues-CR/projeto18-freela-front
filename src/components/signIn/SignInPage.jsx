import logo from "../../assets/imgs/logo.png"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRoute from "../../constants/apiRoute";
import { ContainerSigninPage } from "./styled";

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

