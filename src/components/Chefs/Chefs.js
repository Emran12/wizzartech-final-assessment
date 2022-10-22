import React, { useEffect, useState } from "react";
import "./Chefs.css";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("chefs.json")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div className="relative">
      <h1 className="text-center text-3xl">Meet Our Expart Chefs</h1>
      <p className="text-center">
        Objectively pontificate quality models before intuitive information.
        Dramatically recaptiualize multifunctional materials.
      </p>
      <div className="mt-20 chefs">
        {chefs.map((chef) => (
          <div class="card w-96 bg-base-100 shadow-xl ">
            <figure class="px-10 pt-10">
              <div class="avatar">
                <div class="max-w-[50%] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={chef.img} />
                </div>
              </div>
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">{chef.name}</h2>
              <div class="card-actions"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
