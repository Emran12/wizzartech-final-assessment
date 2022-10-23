import React from "react";
import promoVideo from "../About Us/promo-video.mp4";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="m-10 pt-5" id="aboutus">
      <h1 className="text-4xl text-orange-600 font-serif font-bold  pb-2 text-center">
        About Us
      </h1>
      <div className="pt-5 aboutUsContainer">
        <div className="aboutUs">
          <h1 className="text-2xl text-orange-600 font-serif font-bold  pb-2">
            Sound Life
          </h1>
          <p className="text-lg leading-7 font-serif">
            Organization has developed to incorporate four superb takeout areas
            in Toronto with additional to come sooner rather than later. Our
            group takes pride in the way that we can furnish our new and
            faithful clients with extraordinary tasting Canadian-roused
            nourishment that is not normal for that at some other Canadian
            eatery you visit.
          </p>
          <ul className="text-xl list-disc list-inside leading-8 pt-6 bg-white text-green-600 font-serif ">
            <li> Delicious & Healthy Foods</li>
            <li>Specific Family & Kids Zone</li>
            <li> Best Price & Offers</li>
            <li> Made by Fresh Ingredients</li>
          </ul>
        </div>
        <div>
          <video
            src={promoVideo}
            width="full"
            height="500"
            controls
            autoPlay
            muted
          ></video>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
