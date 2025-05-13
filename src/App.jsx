import NavbarComponent from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/ShopMain';
import ShopMain from './pages/ShopMain';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory';



function App() {

  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<ShopMain />} />
          <Route path='/caballero' element={<ShopCategory category="caballero" />} />
          <Route path='/dama' element={<ShopCategory category="dama"/>} />
          <Route path='/nino' element={<ShopCategory category="nino"/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
