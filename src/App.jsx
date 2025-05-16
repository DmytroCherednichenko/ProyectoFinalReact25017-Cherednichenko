import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import NavbarComponent from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ShopMain from './pages/ShopMain';
import Login from './pages/login/Login';
import Cart from './pages/cart/Cart';
import ShopCategory from './pages/shopcategory/ShopCategory';
import Profile from './pages/Profile';
import RutaProtegida from './components/RutaProtegida';
import Administration from './pages/Administration';
import { useEffect, useState } from 'react';




function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (idToRemove) => {
      setCartItems(prevCartItems =>
          prevCartItems.filter(item => item !== idToRemove)
      );
  };

  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<ShopMain addToCart={addToCart}/>} />
          <Route path='/lifestyle' element={<ShopCategory addToCart={addToCart} category="5" />} />
          <Route path='/muebles' element={<ShopCategory addToCart={addToCart} category="3" />} />
          <Route path='/zapatos' element={<ShopCategory addToCart={addToCart} category="4" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
          <Route path='/profile/:id' element={
            <RutaProtegida><Profile /></RutaProtegida>
          } />
            <Route path='/admin' element={
              <RutaProtegida><Administration /></RutaProtegida>
            }>
            </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
