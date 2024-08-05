import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../store/cart/cartSlice';
import CustomAlert from '../CustomAlert/CustomAlert';
import { useState } from 'react';
import './Confirmation.css';
const Confirmation = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState({ show: false, message: '', color: '', icon: false });


  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = totalAmount * 0.15;
  const deliveryFee = 100;
  const grandTotal = totalAmount + tax + deliveryFee;

  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      dispatch(clearCart());
      setAlert({ show: true, message: 'Order placed successfully!', color: 'success', icon: true });
    } else {
      setAlert({ show: true, message: 'Please add items to cart!', color: 'red', icon: false });
    }
  };
  const isDisabled = cartItems.length === 0 ? 'disabled' : "place-order-button";
  return (
    <>
      {alert.show && cartItems.length > 0 && (
        <CustomAlert message={alert.message} show={alert.show} color={alert.color} icon={alert.icon} />
      )}

      {alert.show && cartItems.length === 0 && (
        <CustomAlert message={alert.message} show={alert.show} color={alert.color} icon={alert.icon} />
      )}
      <div className="confirmation-screen">
        <div className="left-container">
          <h3>Delivery Details</h3>
          <div className='userName'>
            <label>Title</label>
            <select value={user.title} disabled>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
            </select>
            <label>Full Name</label>
            <input type="text" value={user.fullName} className='fullName' readOnly />
          </div>
          <div className='Con-detail'>
            <label>Phone Number</label>
            <input type="text" value={user.phoneNumber} readOnly />
            <label>Email</label>
            <input type="email" value={user.email} readOnly />
          </div>
          <label>Delivery Address</label>
          <input type="text" value={user.deliveryAddress} readOnly />
          <label>Nearest Landmark</label>
          <input type="text" value={user.nearestLandmark} readOnly />
          <label>Delivery Instructions</label>
          <textarea value={user.deliveryInstructions} readOnly />
        </div>
        <div className="right-container">
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <span>{item.quantity} x {item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <div className="cart-totals">
            <div className="totals-row">
              <span>Total Amount</span>
              <span>${totalAmount.toFixed(2)}</span>
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
          <button onClick={handlePlaceOrder} className={isDisabled} >Place Order</button>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
