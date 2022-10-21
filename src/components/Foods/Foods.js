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
      <h1 className="text-3xl font-bold menu">Menu</h1>
      <h2 className="text-2xl font-bold menu">Foods</h2>
      <div className="foods">
        {foods.map((food) => (
          <div class="card card-compact w-fit bg-base-100 shadow-xl">
            <figure>
              <img src={food.img} alt="Shoes" />
            </figure>
            <div class="flex justify-between">
              <h2 class="card-title">{food.name}</h2>
              <h2 className="card-title text-end p-2">{food.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
