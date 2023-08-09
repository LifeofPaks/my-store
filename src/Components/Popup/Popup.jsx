import React, { useState, useEffect } from "react";
import "./Popup.scss";

const Popup = () => {
  const [showPopup, setShowPopUp] = useState(false);

  useEffect(() => {
    const popUp = () => {
      window.scrollY > 400 ? setShowPopUp(true) : setShowPopUp(false);
    };

    window.addEventListener("scroll", popUp);
    return () => window.removeEventListener("scroll", popUp);
  }, []);

  return (
    showPopup && (
      <div className="popup">
        <div className="imgWrapper">
          <img
            src="https://img.icons8.com/glyph-neue/64/FFFFFF/chat.png"
            alt="chat"
          />
        </div>

        <p>Feedbacks & Support</p>
      </div>
    )
  );
};

export default Popup;
