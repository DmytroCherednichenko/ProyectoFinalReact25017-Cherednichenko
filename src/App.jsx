import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import NavbarComponent from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ShopMain from './pages/ShopMain';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';




function App() {

  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<ShopMain />} />
          <Route path='/lifestyle' element={<ShopCategory category="5" />} />
          <Route path='/muebles' element={<ShopCategory category="3"/>} />
          <Route path='/zapatos' element={<ShopCategory category="4"/>} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/carrito' element={<Cart />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
