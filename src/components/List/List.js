import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import DrinkList from "./DrinkList";
import "./List.css";
const List = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="">
      <h1>All Products List</h1>
      <div className="m-10 list">
        <div>
          <h1>Foods</h1>
          <Table>
            <Thead className="border-2 bg-red-200">
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Quantity</Th>
                <Th>Status</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            {foods.map((food) => (
              <Tbody className="border-2">
                <Tr>
                  <Td className="text-center">{food.id + 1000}</Td>
                  <Td className="flex justify-center">
                    <img
                      src={food.img}
                      width="30px"
                      height="50px"
                      className="rounded"
                    ></img>
                    <p>{food.name}</p>
                  </Td>
                  <Td className="text-center">12</Td>
                  <Td className="text-center">In Stock</Td>
                  <Td className="text-center">{food.price}</Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </div>
        <div>
          <DrinkList></DrinkList>
        </div>
      </div>
    </div>
  );
};

export default List;
