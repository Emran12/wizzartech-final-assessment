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
      <h2 className="text-2xl text-orange-600 pb-3 font-bold menu">Drinks</h2>
      <div className="drinks">
        {drinks.map((drink) => (
          <div
            class="card card-compact w-fit  bg-base-100 shadow-xl"
            key={drink.id}
          >
            <figure>
              <img
                src={drink.img}
                className="h-[200px] w-[220px]"
                alt="drinks"
              />
            </figure>
            <div class="flex justify-between text-lg text-orange-400 pb-3">
              <h2 class="pl-4 pt-4">{drink.name}</h2>
              <h2 className="text-end p-2 pr-4 pt-4">${drink.price}.00</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
