import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Blackbox from './components/Blackbox'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
    <Blackbox />
    <Navbar />
    <main className='flex-grow'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </main>
    <Footer/>
    </div>
  )
}

export default App