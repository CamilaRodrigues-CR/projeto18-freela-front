import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import SignInPage from "./pages/signIn/SignInPage"
import SignUpPage from "./pages/signUp/SignUpPage"
import MyProductsPage from "./pages/MyProducts"
import ProductsPage from "./pages/Products/ProductsPage"


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