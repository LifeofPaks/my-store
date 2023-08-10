import React from "react";
import "./PlayStation.scss";
import Loader from "react-loaders";

const PlayStation = () => {
  return (
    <>
      <div className="playstation">
        <h1 className="title">PlayStation Store</h1>
        <div className="sidebar">
          <div className="top">
            <img src= "https://www.designinfo.in/wp-content/uploads/nc/p/5/1/9/2/9/51929-485x485-optimized.jpg" alt="ps5" />
          </div>

          <div className="bottom">

          </div>
        </div>

        <div className="main"></div>
      </div>
      <Loader type="ball-clip-rotate" />
    </>
  );
};

export default PlayStation;
