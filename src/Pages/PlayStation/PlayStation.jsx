import React from "react";
import "./PlayStation.scss";
import Loader from "react-loaders";
import { playstationItems } from "../../Helpers/Data";
import { Link } from "react-router-dom";
import Star from "../../assets/images/icons8-star-48.png";

const PlayStation = ({scrollToTop}) => {
  return (
    <>
      <div className="playstation">
        {playstationItems.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>

            <div className="container">
              <div className="sidebar">
                <div className="top">
                  <img src={item.image} alt="ps5" />
                </div>

                <div className="bottom">
                  <h2>{item.subTitle}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>

              <div className="main">
                <div className="wrapper">
                  {item.list.map((data) => (
                    <Link
                      to={`/products/${data.id}`}
                      className="item"
                      key={data.id}
                      onClick={scrollToTop}
                    >
                      <div className="imgWrapper">
                        <img
                          src={data.defaultImg}
                          alt="image"
                          className="default"
                        />

                        <img
                          src={data.hoverImg}
                          alt="image"
                          className="hover"
                        />
                      </div>

                      <div className="productInfo">
                        <p>{data.title}</p>
                        <span className="now">${data.now}</span>
                        <span className="then">${data.then}</span>

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
            </div>
          </div>
        ))}
      </div>
      <Loader type="ball-clip-rotate" />
    </>
  );
};

export default PlayStation;
