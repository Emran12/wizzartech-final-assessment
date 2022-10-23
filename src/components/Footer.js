import React from "react";
import gmail from "../assets/icons/gmail.svg";
import whatsApp from "../assets/icons/whatsApp.svg";
import fb from "../assets/icons/fb.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content">
      <div>
        <span className="footer-title text-orange-800 ">Services</span>
        <a className="">Delicious & Healthy Foods</a>
        <a className="">Spacific Family & Kids Zone</a>
        <a className="">Best Price & Offers</a>
        <a className="">Made By Fresh Ingredients</a>
      </div>
      <div>
        <span className="footer-title text-orange-600">Important Links</span>
        <a
          href="https://adventures.com/blog/best-food-canada/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Best Food
        </a>
        <a
          href="https://canadas100best.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Best Restaurants in Canada
        </a>
        <a
          href="https://www.travelalerts.ca/blogs/9-uniquely-canadian-beverages/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Uniquely Canadian Beverage
        </a>
      </div>
      <div>
        <span className="footer-title text-orange-600">Contact</span>
        <div className="grid grid-flow-col gap-4">
          <div className="text-center p-3">
            <div className="flex items-center mb-6">
              <img src={gmail} className="w-8 h-8 rounded mr-4"></img>
              <p>info@wizzartech.com</p>
            </div>
            <div className="flex items-center mb-6 ">
              <img src={whatsApp} className="w-8 h-8 rounded mr-4" alt=""></img>
              <p>+1 647-673-8894</p>
            </div>
            <div className="flex items-center mb-6">
              <img src={fb} className="w-8 h-8 rounded mr-4 " alt=""></img>
              <a
                href="https://www.facebook.com/wizzartech/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Fb
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
