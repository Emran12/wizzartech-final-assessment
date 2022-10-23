import React, { useState } from "react";
import Drinks from "../Drinks/Drinks";
import Foods from "../Foods/Foods";
import List from "../List/List";

const Catalogue = () => {
  const [select, setSelect] = useState("Catalogue");
  const chooseCatalogue = (e) => {
    const res = e.target.value;
    setSelect(res);
  };
  return (
    <div className="m-20" id="menu">
      <h1 className="text-4xl text-orange-600 pb-3 font-bold text-center">
        Menu
      </h1>
      <h2 className="text-xl text-center">
        Choose Your Favourite Foods and Drinks
      </h2>
      <select
        className="text-xl font-bold p-3"
        value={select}
        onChange={(e) => chooseCatalogue(e)}
      >
        <option>Catalogue</option>
        <option>List</option>
        <option>Foods</option>
        <option>Drinks</option>
      </select>
      {select === "Catalogue" && (
        <div>
          <Foods></Foods>
          <Drinks></Drinks>
        </div>
      )}
      {select === "Drinks" && <Drinks></Drinks>}
      {select === "Foods" && <Foods></Foods>}
      {select === "List" && <List></List>}
    </div>
  );
};

export default Catalogue;
