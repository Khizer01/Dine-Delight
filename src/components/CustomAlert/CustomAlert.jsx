import React, { useState, useEffect } from 'react';
import './CustomAlert.css';
const CustomAlert = ({ message, show, duration = 4000, color = 'red', icon }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  return (
    <div className={`custom-alert ${visible ? 'show' : ''} ${color}`}>
      {icon && <i className="fa-solid fa-star" style={{ color: "#ffffff", marginRight: "7px" }}></i>} {message}
    </div>
  );
};

export default CustomAlert;
