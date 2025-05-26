import React, { useContext } from "react";
import "./MainOurProducts.scss";
import ProductCard from "../../ui/productCard/ProductCard";
import { FaArrowRight } from "react-icons/fa";
import { productContext } from "../../../context";

const MainOurProducts = () => {
  const { product } = useContext(productContext);
  return (
    <div id="mainOurProducts">
      <div className="container">
        <div className="mainOurProducts-title">
          <h2>Categories</h2>
          <h1>Our Products</h1>
        </div>
        <div className="mainOurProducts">
          {product?.map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
        <center>
          <button>
            Load More{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </center>
      </div>
    </div>
  );
};

export default MainOurProducts;
