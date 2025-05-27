import React, { use } from "react";
import "./MainCategories.scss";
import Vegetables from "../../../assets/images/vegetables.webp";
import Fruits from "../../../assets/images/fruits.png";
import Nuts from "../../../assets/images/nuts.png";
import Health from "../../../assets/images/health.png";
import { useNavigate } from "react-router-dom";

const MainCategories = () => {
  const nav = useNavigate();
  return (
    <div id="categories">
      <div className="container">
          <h1 className="categories-title">All Categories</h1>
        <div className="categories">
          <div className="categories--item">
            <img src={Vegetables} alt="img" />
            <h1>Vegetables</h1>
          </div>
          <div className="categories--item">
            <img src={Fruits} alt="img" />
            <h1>Fruits</h1>
          </div>
          <div className="categories--item">
            <img src={Nuts} alt="img" />
            <h1>Nuts</h1>
          </div>
          <div className="categories--item">
            <img src={Health} alt="img" />
            <h1>Health</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCategories;
