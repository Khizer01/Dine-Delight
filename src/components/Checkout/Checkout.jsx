import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../store/user/userSlice';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUser({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <div className="checkout">
      <div className="checkout-container">

        <form onSubmit={handleSubmit}>
          <h3>Checkout</h3>
          <div className='checkout-userName'>
            <label>Title</label>

            <select name="title" value={user.title} onChange={handleChange} required>
              <option value="" disabled>Select</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
            </select>
            <label>Full Name</label>
            <input type="text" name="fullName" value={user.fullName} onChange={handleChange} required />
          </div>
          <div className='checkout-Con-detail '>
            <label>Phone Number</label>
            <input type="number" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} />
          </div>
          <div>
            <label>Delivery Address</label>
            <input type="text" name="deliveryAddress" value={user.deliveryAddress} onChange={handleChange} required />
          </div>
          <div>
            <label>Nearest Landmark</label>
            <input type="text" name="nearestLandmark" value={user.nearestLandmark} onChange={handleChange} />
          </div>
          <div>
            <label>Delivery Instructions</label>
            <textarea name="deliveryInstructions" value={user.deliveryInstructions} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className='checkout-place-order-button'>Proceed to Confirmation</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
