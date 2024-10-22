import { useState } from 'react'

import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import OrderPlace from './pages/orderplace/OrderPlace'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'

function App() {
  const [count, setCount] = useState(0)
  const [showLogin,setShowLogin]=useState(false);

  return (
  <>
  {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
  <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<OrderPlace />} />
    </Routes>
  </div>
  <Footer/>
  </>
  )
}

export default App
