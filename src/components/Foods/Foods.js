import React, { useEffect, useState } from "react";
import "./Foods.css";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="foodContainer mt-16 pb-6">
      <h2 className="text-2xl font-bold menu text-orange-600 pb-3">Foods</h2>
      <div className="foods">
        {foods.map((food) => (
          <div
            class="card card-compact w-fit bg-base-100 shadow-xl "
            key={food.id}
          >
            <figure>
              <img src={food.img} width="350px" height="200px" alt="Shoes" />
            </figure>
            <div class="flex justify-between mt-3 pb-3">
              <h2 class="text-orange-400 pl-5 text-lg font-semibold">
                {food.name}
              </h2>
              <h2 className="text-end pr-4 mt-2 text-orange-400">
                ${food.price}.00
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
