import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, Menu, NotFound, Contact, About, Cart, Confirmation, Checkout } from '../Importfile';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='menu' element={<Menu />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='cart' element={<Cart />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='confirmation' element={<Confirmation />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
