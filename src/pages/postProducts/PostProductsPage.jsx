import { useNavigate } from "react-router-dom";
import { Container, ContainerNewProduct } from "./styled";
import apiProducts from "../../constants/apiProducts";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";


export default function PostProductsPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
      name: "",
      price: "",
      description: "",
      photo: "",
      type: 'eletrodoméstico' // Defina um valor padrão aqui
    });
    const token = localStorage.getItem('token');
  
    function handleForm(event) {
      setForm({
        ...form,
        [event.target.name]: event.target.value
      });
    }
  
    function newProduct(e) {
      e.preventDefault();
  
      apiProducts.postProducts(form, token)
        .then(res => {
          navigate('/products');
          console.log(form);
        })
        .catch(err => {
          console.log(err.response.data);
          console.log(form);
          alert(err.response.data);
        });
    }
  
    return (
      <Container>
        <Navbar />
  
        <ContainerNewProduct>
  
          <form onSubmit={newProduct}>
            <input name="name" placeholder="Nome do Produto" type="text" required value={form.name} onChange={handleForm} />
            <input name="price" placeholder="Preço sem a vírgula" type="text" required value={form.price} onChange={handleForm} />
            <input name="description" placeholder="Descrição do produto" type="tel" value={form.description} onChange={handleForm} required />
            <input name="photo" placeholder="URL da imagem" type="url" required value={form.photo} onChange={handleForm} />
  
            <select name="type" value={form.type} onChange={handleForm}>
              <option value="eletrodoméstico">Eletrodoméstico</option>
              <option value="eletronicos">Eletrônicos</option>
              <option value="moveis">Móveis</option>
              <option value="roupa">Roupa</option>
              <option value="variados">Variados</option>
            </select>
  
            <button type="submit">Desapegar</button>
  
          </form>
        </ContainerNewProduct>
      </Container>
    )
  }
  
 