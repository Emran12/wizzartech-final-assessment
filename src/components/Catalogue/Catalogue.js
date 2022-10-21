import React, { useState } from "react";
import Drinks from "../Drinks/Drinks";
import Foods from "../Foods/Foods";
import List from "../List/List";

const Catalogue = () => {
  const [select, setSelect] = useState("Foods");
  const chooseCatalogue = (e) => {
    const res = e.target.value;
    setSelect(res);
  };
  return (
    <div className="m-10">
      <select value={select} onChange={(e) => chooseCatalogue(e)}>
        <option>Foods</option>
        <option>Drinks</option>
        <option>List</option>
      </select>
      {select === "Foods" && <Foods></Foods>}
      {select === "Drinks" && <Drinks></Drinks>}
      {select === "List" && <List></List>}
    </div>
  );
};

export default Catalogue;
