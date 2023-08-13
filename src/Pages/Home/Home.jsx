import React from "react";
import "./Home.scss";
import Banner from "../../Components/Banner/Banner";
import Feature from "../../Components/Feature/Feature";
import AllCategories from "../../Components/AllCategories/AllCategories";
import Loader from "react-loaders";
import Bots from "../../Components/Bots/Bots";

const Home = ({scrollToTop}) => {


  return (
    <>
      <div className="home">
        <Banner />
        <Feature />
        <AllCategories scrollToTop={scrollToTop} />
        <Bots/>
      </div>
      <Loader type="ball-clip-rotate" />
    </>
  );
};

export default Home;
