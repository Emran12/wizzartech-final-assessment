import React from "react";
import AboutUs from "../../components/About Us/AboutUs";
import Banner from "../../components/Banner/Banner";
import Blog from "../../components/Blog/Blog";
import Catalogue from "../../components/Catalogue/Catalogue";
import Chefs from "../../components/Chefs/Chefs";
import ContactUs from "../../components/Contact Us/ContactUs";
import Footer from "../../components/Footer";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Catalogue></Catalogue>
      <Chefs></Chefs>
      <Reviews></Reviews>
      <Blog></Blog>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
