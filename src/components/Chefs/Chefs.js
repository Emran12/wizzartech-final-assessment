import React, { useEffect, useState } from "react";
import "./Chefs.css";
import fb from "../../assets/icons/fb.png";
import LinkedIn from "../../assets/icons/LinkedIn.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("chefs.json")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div className="relative">
      <h1 className="text-center text-3xl text-orange-600">
        Meet Our Expart Chefs
      </h1>
      <p className="text-center mt-3 text-lg leading-6">
        "Always remember: If you’re alone in the kitchen and you drop the lamb,
        you can always just pick it up. Who’s going to know?." Julia Child
      </p>
      <div className="mt-20 chefs">
        {chefs.map((chef) => (
          <div class="card w-96 bg-base-100 shadow-xl ">
            <div class="avatar justify-center">
              <div class="max-w-[50%] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={chef.img} />
              </div>
            </div>
            <div class="card-body items-center text-center">
              <h2 class="card-title">{chef.name}</h2>
              <div class="text-center text-2xl">{chef.status}</div>
              <div className="flex gap-3">
                <a href={chef.fb} target="_blank" rel="noreferrer noopener">
                  <img src={fb} alt="" width={"20px"} height={"20px"}></img>
                </a>
                <a
                  href={chef.LinkedIn}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={LinkedIn}
                    alt=""
                    width={"20px"}
                    height={"20px"}
                  ></img>
                </a>
                <a
                  href={chef.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={instagram}
                    alt=""
                    width={"20px"}
                    height={"20px"}
                  ></img>
                </a>
                <a
                  href={chef.twitter}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={twitter}
                    alt=""
                    width={"20px"}
                    height={"20px"}
                  ></img>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
