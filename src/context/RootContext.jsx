import React, { useEffect, useState } from "react";
import axios from "axios";
import { productContext } from "./index";

const RootProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [basket, setBasket] = useState([]);

  async function getData() {
    const res = await axios(
      `https://67ffe142b72e9cfaf7262fd6.mockapi.io/api/v1/Organick`
    );
    setProduct(res.data);
  }

  function getBasket() {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res);
  }

  useEffect(() => {
    getData();
    getBasket();
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <productContext.Provider value={{ product, setProduct, basket, setBasket }}>
      {children}
    </productContext.Provider>
  );
};

export default RootProvider;
