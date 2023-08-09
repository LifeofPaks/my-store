import React, { useState } from "react";
import "./Products.scss";
import Loader from "react-loaders";
import Banner6 from "../../assets/images/iwatchBanner.jpeg";
import ShowAll from "../../Components/ShowAll/ShowAll";
import { useParams } from "react-router-dom";


const Products = () => {
  const [maxPrice, setMaxPrice] = useState(1000)
  const param = useParams()


  return (
    <>
      <div className="products">
        <div className="sidebar">
          <div className="item pc">
            <h2>Product Categories</h2>
            <div className="wrapper">
              <input type="checkbox" id="1" value={1}/>
              <label htmlFor="1">PlayStation</label>
            </div>

            <div className="wrapper">
              <input type="checkbox" id="2"value={2} />
              <label htmlFor="2">Apple</label>
            </div>

            <div className="wrapper">
              <input type="checkbox" id="3" value={3}/>
              <label htmlFor="3">Others</label>
            </div>
          </div>

          <div className="item filter">
            <h2>Filter By Price</h2>
            <div className="wrapper">
              <span>0</span>
                <input type="range" min={0} max={1000} onChange={e=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
          </div>

          <div className="item sort">
            <h2>Sort By</h2>
            <div className="wrapper">
              <input type="radio" id="sort" name="price"  />
              <label htmlFor="sort">Price (Lowest frist)</label>
            </div>

            <div className="wrapper">
              <input type="radio" id="sort" name="price"  />
              <label htmlFor="sort">Price (Highest first)</label>
            </div>
          </div>
        </div>

        <div className="main">
          <img src={Banner6} alt="image" className="banner"/>
          <ShowAll/>
        </div>
      </div>

      <Loader type="square-spin" />
    </>
  );
};

export default Products;
