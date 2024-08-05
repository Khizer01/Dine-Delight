import React from 'react'
import './Map.css'
function Map() {
  return (
    <section className="location">
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2874887375483!2d67.02357788021347!3d24.85402888863855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e741e7763ff%3A0x4b1ea77e0b5258cf!2sDine%20Inn%20Restaurant!5e0!3m2!1sen!2s!4v1722535859543!5m2!1sen!2s" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" title="map" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="address">
        <h2>Our Location</h2>
        <p>1234 DineDelight St.<br />Food City, FC 56789</p>
        <h3>Contact Details:</h3>
        <p className='contact-details'>Phone: (123) 456-7890<br />Email: contact@dinedelight.com</p>
      </div>
    </section>
  )
}

export default Map
