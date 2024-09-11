import { NavLink, Link } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';
import menuBar from '../../assets/menuBar.svg';
import cross from '../../assets/cross.svg';
import './Navbar.css';
function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const getClass = ({ isActive }) => isActive ? 'link-active' : null;
  const displayMenu = () => {
    const menu = document.querySelector('.menuBar');
    const cross = document.querySelector('.cross');
    const ul = document.querySelector('.ul');

    menu.classList.add('hide');
    menu.classList.remove('menuBar');
    cross.classList.add('active');
    ul.classList.remove('hide');
  }

  const hideMenu = () => {
    const menu = document.querySelector('.hide');
    const cross = document.querySelector('.cross');
    const ul = document.querySelector('.ul');

    ul.classList.add('hide');
    cross.classList.remove('active');
    menu.classList.add('menuBar');
    menu.classList.remove('hide');
  }
  return (
    <header>
      <nav>
        <div className='head'>
          <Link to='/' className='logo-text'><img src={logo} alt='DineDelight' className='logo' /><p>Dine<span>Delight</span></p></Link>
          <img src={menuBar} alt="Menu" className='menuBar' onClick={displayMenu} />

          <img src={cross} alt="" className='cross' onClick={hideMenu} />
        </div>
        <ul className='ul hide'>
          <li>
            <NavLink to='/' className={getClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to='menu' className={getClass}>Menu</NavLink>
          </li>
          <li>
            <NavLink to='about' className={getClass}>About</NavLink>
          </li>
          <li>
            <NavLink to='contact' className={getClass}>Contact</NavLink>
          </li>
          <li>
            <NavLink to='cart'><img src={cart} alt='Cart' className='cart' /><p className='numb'>{cartItems.length}</p></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
