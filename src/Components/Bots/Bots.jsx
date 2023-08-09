import React, { useState, useEffect } from "react";
import './Bots.scss'

const Bots = () => {

    const [showTopBtn, setShowBtn] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        window.scrollY > 400 ? setShowBtn(true) : setShowBtn(false);
      });
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
  
  return (
    <div className='bot'>
           {/* SCROLL TOP BUTTON */}
           {showTopBtn && (
          <div className="topButton">
            <button onClick={scrollToTop}>
              <img
                src="https://img.icons8.com/external-phatplus-lineal-phatplus/64/external-up-arrow-essential-phatplus-lineal-phatplus.png"
                alt="external-up-arrow-essential-phatplus-lineal-phatplus"
              />
            </button>
          </div>
        )}

    </div>
  )
}

export default Bots