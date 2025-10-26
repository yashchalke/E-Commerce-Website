import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Blackbox from './components/Blackbox'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'
import Category from './pages/Category'
import Shop from './pages/Shop'
import OnSale from './pages/OnSale'
import BrandPage from './pages/BrandPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SuccessPage from './pages/SuccessPage'
import OrdersPage from './pages/OrdersPage'
import AdminRoute from './components/AdminRoute'
import AdminPanel from './pages/AdminPanel'

const App = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.toLowerCase().startsWith('/admin');

  return (
    <div className='flex flex-col min-h-screen'>
      {!isAdminRoute && <Blackbox />}
      {!isAdminRoute && <Navbar />}

      <main className='flex-grow scroll-smooth'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/New-Arrivals" element={<Category />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/OnSale" element={<OnSale />} />
          <Route path="/Brands" element={<BrandPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route
            path={"/admin" || "/Admin"} 
            element={
              <AdminRoute>
                <AdminPanel />
              </AdminRoute>
            }
          />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  )
}

export default App