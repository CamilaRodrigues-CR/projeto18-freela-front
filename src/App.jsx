import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/homePage/HomePage"
import SignInPage from "./components/signIn/SignInPage"
import SignUpPage from "./components/signUp/SignUpPage"
import MyProductsPage from "./components/MyProducts"
import ProductsPage from "./components/Products/ProductsPage"


function App() {
  
  return (
    <BrowserRouter>
    
      <Routes >
        <Route path="/" element= {<HomePage />}/>
        <Route path="/signin" element= {<SignInPage />}/>
        <Route path="/signup" element= {<SignUpPage />}/>
        <Route path="/products" element= {<ProductsPage />}/>
        
        <Route path="/myproducts" element= {<MyProductsPage />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

/* 
<Route path="/products/:id" element= {<ProductPage />}/>
---------------------------
   NÃO ESQUECER DA NAVBAR
---------------------------
*/