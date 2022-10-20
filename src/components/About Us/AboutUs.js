import React from "react";
import { Player } from "video-react";

const AboutUs = () => {
  return (
    <div className="flex">
      <div>
        About us
        <p>lorem lorem lorem </p>
      </div>
      <div>
        <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
      </div>
    </div>
  );
};

export default AboutUs;
