import React from 'react'

function Map() {
  return (
      <section className="location">
        <div className="map">
          <iframe
            title="DineDelight Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.30477642695!2d-74.25987522055938!3d40.69767006379781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b83b8c8c91%3A0x5d9bf6a6e3b37680!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1623429071530!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="address">
        <h2>Our Location</h2>
        <p>1234 DineDelight St.<br/>Food City, FC 56789</p>
        <h3>Contact Details:</h3>
        <p className='contact-details'>Phone: (123) 456-7890<br />Email: contact@dinedelight.com</p>
      </div>
      </section>
  )
}

export default Map
