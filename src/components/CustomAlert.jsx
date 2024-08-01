import React, { useState, useEffect } from 'react';

const CustomAlert = ({ message, show, duration = 4000 }) => {
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
    <div className={`custom-alert ${visible ? 'show' : ''}`}>
     <i className="fa-solid fa-star" style={{color: "#ffffff", marginRight: "7px"}}></i> {message}
    </div>
  );
};

export default CustomAlert;
