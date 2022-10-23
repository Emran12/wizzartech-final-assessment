import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";

const images = [
  {
    id: 1,
    src: banner1,
    alt: "banner1",
  },
  {
    id: 2,
    src: banner2,
    alt: "banner2",
  },
  {
    id: 3,
    src: banner3,
    alt: "banner3",
  },
  {
    id: 4,
    src: banner4,
    alt: "banner4",
  },
];

const Banner = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div class="">
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id}>
            <img src={item.src} alt={item.alt} className="w-full h-screen" />
            {/* <div className="centered">
              <p className="">fdklfjdksfj</p>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
