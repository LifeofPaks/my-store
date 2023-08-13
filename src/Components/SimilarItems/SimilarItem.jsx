import React from 'react'
import { Explore } from "../../Helpers/Data";
import { Link } from "react-router-dom";
import Star from "../../assets/images/icons8-star-48.png";
import './SimilarItem.scss'

const SimilarItem = ({scrollToTop}) => {
  return (
    <div className='similarItem'>
        <h2>Similar itmes you may like</h2>
        <div className="Xwrapper">
        {Explore.slice(0,5).map((data) => (
          <Link to={`/products/${data.id}`} className="item" key={data.id} onClick={scrollToTop}>
            <div className="imgWrapper">
              <img src={data.defaultImg} alt="image" className="default" />

              <img src={data.hoverImg} alt="image" className="hover" />
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
  )
}

export default SimilarItem