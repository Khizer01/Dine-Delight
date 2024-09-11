import React from 'react';
import chef1 from '../../assets/chef-1.jpg';
import chef2 from '../../assets/chef-2.jpg';
import chef3 from '../../assets/chef-3.jpg';
import './About.css';
function About() {
  return (
    <div className="about">
      <h1 className='about-heading'>About <span className='dine'>Dine</span>Delight</h1>

      <section className="story">
        <h2>Our Story</h2>
        <p>DineDelight was founded in 2020 with a vision to bring a unique dining experience to food lovers. Inspired by global culinary traditions, we blend flavors from around the world to create an unforgettable dining experience. Our journey started with a small bistro and has grown into a beloved restaurant known for its exceptional food and warm hospitality.</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>Our mission at DineDelight is to provide an extraordinary dining experience that exceeds our guests' expectations. We strive to deliver delicious, high-quality meals made from the freshest ingredients, served in a welcoming and elegant atmosphere. We are committed to continuous improvement and innovation in our culinary offerings.</p>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <div className="chefs">
          <div className="chef">
            <img src={chef1} alt="Chef A" />
            <h3>Chef Mario Batali</h3>
            <p className='para'>10 years of experience in French cuisine</p>
          </div>
          <div className="chef">
            <img src={chef2} alt="Chef B" />
            <h3>Chef Amelia Dupont</h3>
            <p className='para'>8 years of experience in Italian cuisine</p>
          </div>
          <div className="chef">
            <img src={chef3} alt="Chef C" />
            <h3>Chef David Chang</h3>
            <p className='para'>12 years of experience in Japanese cuisine</p>
          </div>
        </div>
        <p >Our team of talented chefs brings a wealth of experience and passion to the kitchen, crafting dishes that are both innovative and true to their culinary roots.</p>
      </section>
    </div>
  );
}

export default About;
