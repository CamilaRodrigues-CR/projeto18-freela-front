import logo from "../../assets/imgs/logo.png"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiAuth from "../../constants/apiAuth";
import { ContainerSignupPage } from "./styled";

export default function SignUpPage() {
    const navigate = useNavigate()
    const [confirmPassword, setConfirmPassword] = useState({confirmPassword: ""});
    const [form, setForm] = useState({ name: "", email: "", phone: "", cpf: "", password: "" });


    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
        setConfirmPassword({ [e.target.name]: e.target.value })
    }

    function signup(e) {
        e.preventDefault()

        if (form.email.length === 0 || form.name.length === 0 || form.password.length === 0) {
            return alert("Preencha todos os campos")
        }

        if (form.password !== confirmPassword.confirmPassword) {
            return alert("As senhas devem ser iguais!")
        }
        if (form.password.length < 3) {
            return alert("A senha deve ter ao menos 3 caracteres!")
        }

        apiAuth.signUp(form)
            .then(res => {
                navigate('/signin')
            })
            .catch(err => {
                console.log(err.response.data)

                alert(err.response.data)
            })
    }

    return (
        <ContainerSignupPage>
            <Link to={'/'}>
                <img src={logo} alt="Logo da empresa" />
            </Link>

            <form onSubmit={signup}>
                <input name="name" placeholder="  nome" type="text" required value={form.name} onChange={handleForm} />
                <input name="email" placeholder="  e-mail" type="email" required value={form.email} onChange={handleForm} />
                <input name="phone" placeholder="  telefone" type="tel"  value={form.phone} onChange={handleForm} required />
                <input name="cpf" placeholder="  cpf" type="int" value={form.cpf} onChange={handleForm} required />
                <input name="password" placeholder="  senha" type="password" value={form.password} onChange={handleForm} required />
                <input name="confirmPassword" placeholder="Confirme a senha" type="password" required value={confirmPassword.confirmPassword} onChange={handleForm}/>
                <button type="submit"> Cadastrar </button>
                <Link to={'/signin'}>
                    <div> Já tenho cadastro! </div>
                </Link>
            </form>
        </ContainerSignupPage>
    )
}
