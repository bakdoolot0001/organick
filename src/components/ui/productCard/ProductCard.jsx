import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { productContext } from "../../../context";

const ProductCard = () => {
  const { product } = useContext(productContext);

  return (
    <section id="productCard">
      {product.map((el) => (
        <div className="productCard" key={el.id}>
          <div className="category">{el.category.toUpperCase()}</div>
          <NavLink to={`/details/${el.id}`}>
            <img src={el.image} alt={el.name} />
          </NavLink>
          <div className="productCard--bottom__text">
            <h3>{el.name}</h3>
            <hr />
            <div className="productCard--bottom">
              <div className="price">
                <span className="old">${el.price}.00</span>
                <span className="new">${el.price - 7}.00</span>
              </div>
              <div className="rating">
                {"★".repeat(el.rating) + "☆".repeat(5 - el.rating)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCard;
