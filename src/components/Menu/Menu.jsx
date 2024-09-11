import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cartSlice';
import data from '../../store/data/data';
import './Menu.css';

function Menu() {
  const menu = data;
  const appetizers = menu[0];
  const mainCourse = menu[1];
  const desert = menu[2];
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const addToCart = (dish) => {
    dispatch(addItemToCart(dish));
  };
  const navigate = useNavigate();

  const [showScroll, setScroll] = useState(false);

  const checkScroll = useCallback(() => {
    if (!showScroll && window.pageYOffset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll]);


  return (
    <div className='menu'>
      <div className="menu-contain">
        <h1 className='menu-heading'>Menu</h1>
        <div className="appetizers ">
          <h1>{appetizers.name}</h1>
          {appetizers.dishes.map((dish) => (
            <div key={dish.id} className="card">
              <img src={dish.image} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p>${dish.price}</p>
              <button onClick={() => addToCart(dish)}>Add to Cart<i className="fa-solid fa-circle-plus"></i></button>
            </div>
          ))}
        </div>
        <div className="mainCourse">
          <h1>{mainCourse.name}</h1>
          {mainCourse.dishes.map((dish) => (
            <div key={dish.id} className="card">
              <img src={dish.image} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p>${dish.price}</p>
              <button onClick={() => addToCart(dish)}>Add to Cart<i className="fa-solid fa-circle-plus"></i></button>
            </div>
          ))}
        </div>
        <div className="dessert">
          <h1>{desert.name}</h1>
          {desert.dishes.map((dish) => (
            <div key={dish.id} className="card">
              <img src={dish.image} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p>${dish.price}</p>
              <button onClick={() => addToCart(dish)}>Add to Cart<i className="fa-solid fa-circle-plus"></i></button>
            </div>
          ))}
        </div>
      </div>
      <i className="fa-solid fa-arrow-up scrollTop"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}></i>
      {cart.length > 0 && (
        <div className="view-cart" onClick={() => navigate('/cart')}>
          <span>{cart.length}</span>
          <span>View Cart</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}

export default Menu;
