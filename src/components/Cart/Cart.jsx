import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, addItemToCart } from '../../store/cart/cartSlice';
import './Cart.css';

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleAddItem = (item) => {
    dispatch(addItemToCart(item));
  };

  const calculateTotals = () => {
    const tax = totalPrice * 0.15;
    const deliveryFee = 100;
    const grandTotal = totalPrice + tax + deliveryFee;
    return {
      tax,
      deliveryFee,
      grandTotal,
    };
  };

  const { tax, deliveryFee, grandTotal } = calculateTotals();

  return (
    <div className='cart-sec'>
      <h2>Your Cart</h2>
      {cartItems && cartItems.length > 0 ?
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="item-quantity">
              <button onClick={() => handleRemoveItem(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleAddItem(item)}>+</button>
            </div>
          </div>
        )) :
        <div className='no-item'>
          <h3>No items in cart<i className="fa-solid fa-cart-shopping" style={{ color: "#d98f04", marginTop: '3px' }}></i></h3>
        </div>
      }
      {cartItems.length > 0 && <div>
        <div className="cart-totals">
          <div className="totals-row">
            <span>Total Amount</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="totals-row">
            <span>Tax 15%</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="totals-row">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="totals-row">
            <span>Grand Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
        <p className='ClearCart' onClick={handleClearCart}>Clear Cart</p>
        <button className="checkout-button" onClick={() => navigate('/checkout')}>Checkout <i className="fa-regular fa-circle-check"></i></button>
      </div>
      }
    </div>
  );
}

export default Cart;
