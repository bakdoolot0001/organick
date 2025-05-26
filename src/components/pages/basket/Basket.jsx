import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import "./Basket.scss";
import { ProductContext } from "../../../context";

const Basket = () => {
  const { basket, setBasket } = useContext(ProductContext);

  
  function RemoveBasket() {
    localStorage.removeItem("basket");
  }
  return (
    <section id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket-header">
            <h1>Cart</h1>
            <button className="clear-cart-btn" onClick={() => RemoveBasket()}>
              Clear Cart
            </button>
          </div>
          {
          }
          <div className="basket-content">
            <div className="basket-items">
              <div className="basket-item">
                <img
                  src="https://alm-basket-cdn-03.geobasket.ru/vol2116/part211645/211645637/images/c246x328/1.webp"
                  alt="Телевизор Yasin"
                />
                <div className="item-details">
                  <h3>Тел TV, Yasin</h3>
                  <p className="price">$82,722.00</p>
                  <div className="quantity-controls">
                    <button>-</button>
                    <span>6</span>
                    <button>+</button>
                  </div>
                </div>
                <div className="item-actions">
                  <button className="remove-btn">
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="basket-item">
                <img
                  src="https://alm-basket-cdn-03.geobasket.ru/vol2116/part211645/211645637/images/c246x328/1.webp"
                  alt="Телевизор Yasin"
                />
                <div className="item-details">
                  <h3>Тел TV, Yasin</h3>
                  <p className="price">$82,722.00</p>
                  <div className="quantity-controls">
                    <button>-</button>
                    <span>6</span>
                    <button>+</button>
                  </div>
                </div>
                <div className="item-actions">
                  <button className="remove-btn">
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="basket-item">
                <img
                  src="https://alm-basket-cdn-03.geobasket.ru/vol2116/part211645/211645637/images/c246x328/1.webp"
                  alt="Телевизор Yasin"
                />
                <div className="item-details">
                  <h3>Тел TV, Yasin</h3>
                  <p className="price">$82,722.00</p>
                  <div className="quantity-controls">
                    <button>-</button>
                    <span>6</span>
                    <button>+</button>
                  </div>
                </div>
                <div className="item-actions">
                  <button className="remove-btn">
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="basket-item">
                <img
                  src="https://alm-basket-cdn-03.geobasket.ru/vol2116/part211645/211645637/images/c246x328/1.webp"
                  alt="Телевизор Yasin"
                />
                <div className="item-details">
                  <h3>Тел TV, Yasin</h3>
                  <p className="price">$82,722.00</p>
                  <div className="quantity-controls">
                    <button>-</button>
                    <span>6</span>
                    <button>+</button>
                  </div>
                </div>
                <div className="item-actions">
                  <button className="remove-btn">
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="basket-item">
                <img
                  src="https://alm-basket-cdn-03.geobasket.ru/vol2116/part211645/211645637/images/c246x328/1.webp"
                  alt="Телевизор Yasin"
                />
                <div className="item-details">
                  <h3>Тел TV, Yasin</h3>
                  <p className="price">$82,722.00</p>
                  <div className="quantity-controls">
                    <button>-</button>
                    <span>6</span>
                    <button>+</button>
                  </div>
                </div>
                <div className="item-actions">
                  <button className="remove-btn">
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="basket-item">
                <img
                  src="https://alm-basket-cdn-03.geobasket.ru/vol2116/part211645/211645637/images/c246x328/1.webp"
                  alt="Телевизор Sber"
                />
                <div className="item-details">
                  <h3>Умный</h3>
                  <p className="price">$19,781.00</p>
                  <div className="quantity-controls">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
                <div className="item-actions">
                  <button className="remove-btn">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
            <div className="basket-summary">
              <div className="summary-details">
                <p>
                  Sub Total <span>$208,720.00</span>
                </p>
                <p>
                  Discount <span>-$26,412.00</span>
                </p>
                <p>
                  Total <span>$182,308.00</span>
                </p>
              </div>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;