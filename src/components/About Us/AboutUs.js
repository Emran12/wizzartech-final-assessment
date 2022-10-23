import React from "react";
import promoVideo from "../About Us/promo-video.mp4";
import "./aboutUs.css";
const AboutUs = () => {
  return (
    <div className="m-10 pt-5  flex">
      <div className="aboutUs">
        <h1 className="text-3xl text-orange-600 font-serif font-bold  pb-2">
          About Us
        </h1>
        <p className="text-lg leading-7">
          Organization has developed to incorporate four superb takeout areas in
          Toronto with additional to come sooner rather than later. Our group
          takes pride in the way that we can furnish our new and faithful
          clients with extraordinary tasting Canadian-roused nourishment that is
          not normal for that at some other Canadian eatery you visit.
        </p>
        <ul className="text-xl leading-8 pt-6">
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
  );
};

export default AboutUs;
