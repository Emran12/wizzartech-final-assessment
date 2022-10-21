import React from "react";
import AboutUs from "../../components/About Us/AboutUs";
import Banner from "../../components/Banner";
import List from "../../components/List/List";
import Drinks from "../../components/Drinks/Drinks";
import Foods from "../../components/Foods/Foods";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <AboutUs></AboutUs> */}
      <Foods></Foods>
      <Drinks></Drinks>
      <List></List>
    </div>
  );
};

export default Home;
