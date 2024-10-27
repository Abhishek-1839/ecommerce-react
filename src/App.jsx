
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'


import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import persistor from './store/store'
import Profile from './pages/Profile'
import Store from './pages/Store'
import Order from './pages/Order'
import Footer from './components/Footer'
import Payment from './pages/Payment'
import ProductListsports from './pages/ProductListsports'
import ProductList from './pages/ProductList';
import DecorList from './pages/DecorList'

import Wishlist from './pages/Wishlist'

function App() {
  

  return (
    <>
    <Provider store={persistor}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/cart" element={<Cart />} />
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/store' element={<Store/>}></Route>
        <Route path='/order' element={<Order/>} ></Route>
        <Route path='/payment' element={<Payment/>} ></Route>
        <Route path='/Homedecor' element={<DecorList />}></Route>
        <Route path='/wishlist' element={<Wishlist/>} ></Route>
        <Route path='/Sports'element={<ProductListsports />} ></Route>
        <Route path='/FOOTWEAR' element={<ProductList />} />
      </Routes>
      <Footer/>

    </BrowserRouter>

    </Provider>
      
    </>
  )
}

export default App
