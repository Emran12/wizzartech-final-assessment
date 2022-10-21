import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const DrinkList = () => {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    fetch("drinks.json")
      .then((res) => res.json())
      .then((data) => setDrinks(data));
  }, []);
  return (
    <div>
      <div className="">
        <h1>Drinks</h1>
        <Table>
          <Thead className="border-2 bg-red-200">
            <Tr>
              <Th> Id</Th>
              <Th>Name</Th>
              <Th>Quantity</Th>
              <Th>Status</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          {drinks.map((drink) => (
            <Tbody className="border-2">
              <Tr>
                <Td className="text-center">{drink.id + 2000}</Td>
                <Td className="flex justify-center">
                  <img
                    src={drink.img}
                    width="30px"
                    height="50px"
                    className="rounded"
                  ></img>
                  <p>{drink.name}</p>
                </Td>
                <Td className="text-center">12</Td>
                <Td className="text-center">In Stock</Td>
                <Td className="text-center">{drink.price}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default DrinkList;
