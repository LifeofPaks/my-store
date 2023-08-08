import React from "react";
import "./AllCategories.scss";
import { Explore } from "../../Helpers/Data";
import { Link } from "react-router-dom";
import Star from "../../assets/images/icons8-star-48.png";

const AllCategories = () => {

  return (
    <div className="explore">
      <h1>Explore...</h1>
      <div className="wrapper">
        {Explore.map((data) => (
          <Link path={`/products/${data.id}`} className="item" key={data.id}>
            <div className="imgWrapper">
              <img src={data.defaultImg} alt="image" className="default" />

              <img src={data.hoverImg} alt="image" className="hover" />
            </div>

            <div className="productInfo">
              <p>{data.title}</p>
              <span className="then">${data.then}</span>
              <span className="now">${data.now}</span>

              <div className="rating">
                <img width="18" src={Star} alt="star" />
                <img width="18" src={Star} alt="star" />
                <img width="18" src={Star} alt="star" />
                <img width="18" src={Star} alt="star" />
                <img width="18" src={Star} alt="star" />
              </div>
            </div>

            <div className="actions">
              <img
                width="20"
                src="https://img.icons8.com/ios/50/hearts--v1.png"
                alt="hearts--v1"
              />
              <img
                width="20"
                src="https://img.icons8.com/ios/50/shopping-cart--v1.png"
                alt="shopping-cart--v1"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
