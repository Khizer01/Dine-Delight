import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import './App.css';
import {NavBar, Home, Menu, Footer, NotFound, Contact, About, Cart, Confirmation, Checkout} from './components/Importfile';

function App() {
  // const [cart, setCart] = useState([]);
  return (
    <div>
   <NavBar />

   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='menu' element={<Menu />} />
    <Route path='contact' element={<Contact/>} />
    <Route path='about' element={<About />} />
    <Route path='cart' element={<Cart />} />
    <Route path='checkout' element={<Checkout />} />
    <Route path='confirmation' element={<Confirmation />} />
    <Route path='*' element={<NotFound />} />
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
