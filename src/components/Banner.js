import React from "react";
import banner1 from "../../src/assets/images/banner1.jpg";
import banner2 from "../../src/assets/images/banner2.jpg";
import banner3 from "../../src/assets/images/banner3.jpg";
import banner4 from "../../src/assets/images/banner4.jpg";

const Banner = () => {
  return (
    <div class="carousel w-full max-h-screen">
      <div id="banner1" class="carousel-item relative w-full">
        <img src={banner1} class="w-full max-h-screen" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#banner4" class="btn btn-circle">
            ❮
          </a>
          <a href="#banner2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="banner2" class="carousel-item relative w-full">
        <img src={banner2} class="w-full max-h-screen" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#banner1" class="btn btn-circle">
            ❮
          </a>
          <a href="#banner3" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="banner3" class="carousel-item relative w-full">
        <img src={banner3} class="w-full max-h-screen" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#banner2" class="btn btn-circle">
            ❮
          </a>
          <a href="#banner4" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="banner4" class="carousel-item relative w-full">
        <img src={banner4} class="w-full max-h-screen" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#banner3" class="btn btn-circle">
            ❮
          </a>
          <a href="#banner1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
