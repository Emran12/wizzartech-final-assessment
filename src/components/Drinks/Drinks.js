import React, { useEffect, useState } from "react";
import "./Drinks.css";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    fetch("drinks.json")
      .then((res) => res.json())
      .then((data) => setDrinks(data));
  });
  return (
    <div className="drinksContainer mt-16">
      <h2 className="text-2xl font-bold menu">Drinks</h2>
      <div className="drinks">
        {drinks.map((drink) => (
          <div class="card card-compact w-fit  bg-base-100 shadow-xl">
            <figure>
              <img src={drink.img} width="50%" height="60%" alt="drinks" />
            </figure>
            <div class="flex justify-between">
              <h2 class="pl-4 pt-4">{drink.name}</h2>
              <h2 className="text-end p-2 pr-4 pt-4">{drink.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
