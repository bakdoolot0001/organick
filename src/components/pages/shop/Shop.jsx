import React from "react";
import ProductCard from "../../ui/productCard/ProductCard";
import ShopImg from "../../../assets/images/Shop.svg";

const Shop = () => {
  return (
    <>
      <section id="shop">
        <div
          className="shop"
          style={{
            backgroundImage: `url(${ShopImg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#2c3e50",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          <h1>Shop</h1>
        </div>
        <ProductCard />
      </section>
    </>
  );
};

export default Shop;