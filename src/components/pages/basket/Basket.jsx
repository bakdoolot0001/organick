import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import Empty from "../../../assets/images/Empty.png";
import { productContext } from "../../../context";
import "./Basket.scss"

const Basket = () => {
  const { basket, setBasket } = useContext(productContext);
  
  const removeBasket = () => {
    setBasket([]);
    localStorage.removeItem("basket");
  };

  const removeFromBasket = (id) => {
    const updatedBasket = basket.filter((item) => item.id !== id);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
  };

  const getTotal = () => {
    return basket.reduce((acc, el) => acc + (el.price - 7) * el.count, 0);
  };

  const increaseCount = (id) => {
    const updatedBasket = basket.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const decreaseCount = (id) => {
    const updatedBasket = basket
      .map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
      .filter((item) => item.count > 0);
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const maxItems = 4;
  const percentage = Math.min((basket.length / maxItems) * 100, 100);

  if (basket.length === 0) {
    return (
      <div className="emptyCart">
        <center>
          <img src={Empty} alt="img" />
        </center>
      </div>
    );
  }

  return (
    <section id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket-header">
            <button className="clear-cart-btn" onClick={removeBasket}>
              Clear Cart
            </button>
          </div>

          <div className="basket-content">
            <div className="basket-items">
              {basket.map((el) => (
                <div className="basket-item" key={el.id}>
                  <img src={el.image} alt={el.name} />
                  <div className="item-details">
                    <h3>{el.name}</h3>
                    <p className="price">
                      <span className="old">${el.price}.00</span>
                      <span className="new">${el.price - 7}.00</span>
                    </p>
                    <div className="quantity-controls">
                      <button onClick={() => decreaseCount(el.id)}>-</button>
                      <span>{el.count}</span>
                      <button onClick={() => increaseCount(el.id)}>+</button>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button
                      className="remove-btn"
                      onClick={() => removeFromBasket(el.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="basket-summary">
              <div className="summary-details">
                <p>
                  Quantity:
                  <span>{basket.length} psc</span>
                </p>
                <p>Discount: не рассчитано</p>
                <p>
                  Total: <span>${getTotal().toLocaleString()}</span>
                </p>
              </div>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
          <div className="circle-barf">
            <div className="circle-bar">
              <svg className="circle-bar__svg" viewBox="0 0 36 36">
                <path
                  className="circle-bar__bg"
                  d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle-bar__progress"
                  strokeDasharray={`${percentage}, 100`}
                  d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="circle-bar__text">
                <h1>{Math.round(percentage)}%</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
