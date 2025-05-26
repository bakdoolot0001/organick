import React from "react";
import "./MainWelcome.scss";
import { FaArrowRight } from "react-icons/fa";

const MainWelcome = () => {
  return (
    <div id="mainWelcome">
      <div className="container">
        <div className="mainWelcome">
          <h3>100% Natural Food</h3>
          <h1>
            Choose the best <br />
            healthier way <br />
            of life
          </h1>
          <button>
            Explore Now{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainWelcome;
