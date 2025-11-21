import React, { useEffect, useState } from "react";
import "./Popular.css";
import { Item } from "../Item/Item";

const BASE_URL = "https://mern-ecommerce-backend-59xw.onrender.com";



export const Popular = () => {
  const [popularProducts, serPopularProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/popularinwomen`)
      .then((res) => res.json())
      .then((data) => serPopularProducts(data));
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
