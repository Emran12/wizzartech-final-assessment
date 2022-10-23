import React from "react";
import AboutUs from "../../components/About Us/AboutUs";
import Banner from "../../components/Banner/Banner";
import List from "../../components/List/List";
import Drinks from "../../components/Drinks/Drinks";
import Foods from "../../components/Foods/Foods";
import Navbar from "../../components/Navbar";
import Catalogue from "../../components/Catalogue/Catalogue";
import Chefs from "../../components/Chefs/Chefs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Catalogue></Catalogue>
      <Chefs></Chefs>
    </div>
  );
};

export default Home;
