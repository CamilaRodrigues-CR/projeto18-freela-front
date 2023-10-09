import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import SignInPage from "./pages/signIn/SignInPage"
import SignUpPage from "./pages/signUp/SignUpPage"
import MyProductsPage from "./pages/myProducts/MyProducts"
import ProductsPage from "./pages/Products/ProductsPage"
import ProductsByIdPage from "./pages/productById/ProductsByIdPage"
import PostProductsPage from "./pages/postProducts/PostProductsPage"


function App() {
  
  return (
    <BrowserRouter>
    
      <Routes >
        <Route path="/" element= {<HomePage />}/>
        <Route path="/signin" element= {<SignInPage />}/>
        <Route path="/signup" element= {<SignUpPage />}/>
        <Route path="/products" element= {<ProductsPage />}/>
        <Route path="/newProduct" element= {<PostProductsPage />}/>
        <Route path="/products/:id" element= {<ProductsByIdPage />}/>
        <Route path="/myproducts" element= {<MyProductsPage />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

