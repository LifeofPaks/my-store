import React from "react";
import "./Feature.scss";
import { featureInfoData } from "../../Helpers/Data";
import { featureData } from "../../Helpers/Data";

const Feature = () => {
  return (
    <div className="feature">
      {featureData.map((data) => (
        <div className="container" key={data.id}>
          <div className="wrapper">
            <div className="itemInfo">
              <h1>{data.title}</h1>
              <p>{data.desc}</p>

              <button className="learnMore">Learn more</button>
              <button className="buyNow">Buy now</button>
            </div>
            <img src={data.featureImage} alt="feature" />
          </div>

          <div className="moreFeature">
            <h2>{data.listTitle}</h2>
            <div className="wrapper">
              {data.featureInfoData.map((item) => (
                <div className="item" key={item.id}>
                  <img src={item.image} alt="item" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
