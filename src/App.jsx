import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Product } from './pages/Product'
import  Navbar  from './components/Navbar'
import  Contact  from './pages/Contact'
import  About  from './pages/About'
import  Home  from './pages/Home'
import { Auth } from './pages/Auth'
import FooterPage from './components/Footer'
import { SingleProduct } from './pages/SingleProduct'
import { Cart } from './pages/Cart'
import  CategoryProduct  from './pages/CategoryProduct'
import  {Wishlist}  from './pages/Wishlist'

 const App = () => {

  return (
    <BrowserRouter>
    <div>
      <Navbar/>
    
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path='/category/:category' element={<CategoryProduct/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <FooterPage/>
    </div>
    </BrowserRouter>
  )
}
export default App
