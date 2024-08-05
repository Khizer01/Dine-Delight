import React from 'react'
import { useNavigate } from 'react-router-dom';
import Map from '../Map/Map';
import './Home.css';
function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/menu');
  };

  return (
    <div className='main'>
      <div className='home'>
        <section className='hero-sec'>
          <div className="hero">
            <h1>Welcome to <span className='dine'>Dine</span>Delight</h1>
            <p>Experience the taste of joy with every bite!</p>
            <center><button onClick={handleClick} className='order'>Order Now</button></center>
          </div>
        </section>
      </div>

      <section className="timings">
        <h2>Dine In Timings</h2>
        <ul>
          <li>Wednesday & Thursday: 5:30 - 9:30 PM</li>
          <li>Friday: 5:00 - 10:00 PM</li>
          <li>Saturday: 5:00 - 10:00 PM</li>
          <li>Sunday: 5:00 - 9:30 PM</li>
          <li>Closed Monday & Tuesday</li>
        </ul>
      </section>

      <Map />


    </div>
  )
}

export default Home
