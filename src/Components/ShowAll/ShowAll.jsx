import React from "react";
import "./ShowAll.scss";
import { allCategory } from "../../Helpers/Data";
import Star from "../../assets/images/icons8-star-48.png";
import { Link } from "react-router-dom";
import Popup from "../../Components/Popup/Popup";
import Bots from "../../Components/Bots/Bots";

const ShowAll = () => {
  return (
    <div className="showAll">
      <div className="wrapper">
        {allCategory.map((data) => (
          <Link to={`/products/${data.id}`} className="item" key={data.id}>
            <div className="imgWrapper">
              <img src={data.defaultImg} alt="image" className="default" />

              <img src={data.hoverImg} alt="image" className="hover" />
            </div>

            <div className="productInfo">
              <p>{data.title}</p>
              <span className="now">${data.now}</span>
              <span className="then">${data.then}</span>

              <div className="rating">
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
              </div>
            </div>

            <div className="actions">
              <img
                src="https://img.icons8.com/ios/50/hearts--v1.png"
                alt="hearts--v1"
              />
              <img
                src="https://img.icons8.com/ios/50/shopping-cart--v1.png"
                alt="shopping-cart--v1"
              />
            </div>
          </Link>
        ))}
      </div>

      <Bots/>
      <Popup />
    </div>
  );
};

export default ShowAll;
