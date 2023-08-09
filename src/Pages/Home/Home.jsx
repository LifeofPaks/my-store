import React from "react";
import "./Home.scss";
import Banner from "../../Components/Banner/Banner";
import Feature from "../../Components/Feature/Feature";
import AllCategories from "../../Components/AllCategories/AllCategories";
import Loader from "react-loaders";
import Popup from "../../Components/Popup/Popup";
import Bots from "../../Components/Bots/Bots";

const Home = () => {


  return (
    <>
      <div className="home">
        <Banner />
        <Feature />
        <AllCategories />
        <Bots/>
        <Popup />
      </div>
      <Loader type="square-spin" />
    </>
  );
};

export default Home;
