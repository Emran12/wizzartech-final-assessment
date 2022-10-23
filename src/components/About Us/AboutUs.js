import React from "react";
import promoVideo from "../About Us/promo-video.mp4";

const AboutUs = () => {
  return (
    <div className="flex">
      <div>
        About us
        <p>lorem lorem lorem </p>
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
