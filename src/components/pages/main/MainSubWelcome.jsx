import React from "react";
import justImg1 from "../../../assets/images/justFirst.png";
import justImg2 from "../../../assets/images/justSecond.png";
import "./MainSubWelcome.scss";

const MainSubWelcome = () => {
  return (
    <div id="mainSubWelcome">
      <div className="container">
        <div className="mainSubWelcome">
          <div className="mainSubWelcome--image">
            <img src={justImg1} alt="img" />
            <div className="mainSubWelcome--image__textFirst">
              <h3>Natural!!</h3>
              <h1>
                Get Garden <br /> Fresh Fruits
              </h1>
            </div>
          </div>
          <div className="mainSubWelcome--image">
            <img src={justImg2} alt="img" />
            <div className="mainSubWelcome--image__textSecond">
              <h3>Offer!!</h3>
              <h1>
                Get 10% off <br />
                on Vegetables
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSubWelcome;
