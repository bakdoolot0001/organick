import React, { useContext, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import ShopSingl from "../../../assets/images/ShopSingle.svg";
import { productContext } from "../../../context";

const Details = () => {
  const { product, basket, setBasket } = useContext(productContext);
  console.log("Product:", product);
  console.log("Basket:", basket);
  
  const { productId } = useParams();
  const selected = product.find((el) => el.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const increment = () => {
    if (quantity < selected?.count) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToBasket = (item) => {
    const itemInBasket = basket.find((el) => el.id === item.id);
    const alreadyInBasket = itemInBasket ? itemInBasket.count : 0;
    const totalAfterAdd = alreadyInBasket + quantity;

    if (itemInBasket) {
      const updatedBasket = basket.map((el) =>
        el.id === item.id ? { ...el, count: el.count + quantity } : el
      );
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, { ...item, count: quantity }]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <section id="details">
      <div
        className="details-bg"
        style={{
          backgroundImage: `url(${ShopSingl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#2c3e50",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        <h1>Shop Single</h1>
      </div>
      <div className="container">
        <div className="details">
          <div className="details--block">
            <div className="details--left">
              <span className="category">{selected?.category.toUpperCase()}</span>
              <img src={selected?.image} alt={selected?.name} />
            </div>
            <div className="details--right">
              <h1>{selected?.name}</h1>
              <p className="rating">
                {"★".repeat(selected?.rating) + "☆".repeat(5 - selected?.rating)}
              </p>
              <div className="price">
                <span className="old">${selected?.price}.00</span>
                <span className="new">${selected?.price - 7}.00</span>
              </div>
              <p className="description">{selected?.title}</p>
              <div className="quantity">
                <h3>Quantity</h3>
                <div className="quantity-controls">
                  <button onClick={decrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={increment}>
                    +
                  </button>
                </div>
                <button
                  className="add-to-cart"
                  disabled={basket.length === 4}
                  onClick={() => {
                    if (basket.length === 4) {
                      alert("404: Максимум 4 товара в корзине");
                    } else {
                      addToBasket(selected);
                    }
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="tabs">
            <button
              className={`tab ${activeTab === "description" ? "active" : ""}`}
              onClick={() => setActiveTab("description")}
            >
              Product Description
            </button>
            <button
              className={`tab ${activeTab === "additional" ? "active" : ""}`}
              onClick={() => setActiveTab("additional")}
            >
              Additional Info
            </button>
          </div>

          <div className="tab-content">
            <p>{activeTab === "description" ? selected?.des : selected?.title}</p>
            <h1>Related Products</h1>
          </div>
        </div>
      </div>

      <section id="productCard">
        {product.slice(0, 4).map((el) => (
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
    </section>
  );
};

export default Details;