import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import NavbarComponent from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ShopMain from './pages/ShopMain';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory';
import Profile from './pages/Profile';
import RutaProtegida from './components/RutaProtegida';
import Administration from './pages/Administration';




function App() {

  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<ShopMain />} />
          <Route path='/lifestyle' element={<ShopCategory category="5" />} />
          <Route path='/muebles' element={<ShopCategory category="3" />} />
          <Route path='/zapatos' element={<ShopCategory category="4" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/carrito' element={<Cart />} />
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
