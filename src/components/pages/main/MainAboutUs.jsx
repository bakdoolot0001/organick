import React from "react";
import AboutImg from "../../../assets/images/about-us.png";
import AboutCardImg1 from "../../../assets/images/about-card1.svg";
import AboutCardImg2 from "../../../assets/images/about-card2.svg";
import { FaArrowRight } from "react-icons/fa";
import "./MainAboutUs.scss";

const MainAboutUs = () => {
  return (
    <div id="mainAboutUs">
      <div className="container">
        <div className="mainAboutUs">
          <img src={AboutImg} alt="img" />
          <div className="mainAboutUs--content">
            <h3>About Us</h3>
            <h1>
              We Believe in Working <br />
              Accredited Farmers
            </h1>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to <br />
              been the industry's standard dummy text ever since the 1500s, when
              an unknown <br /> printer took a galley.
            </p>
            <div className="mainAboutUs--content__card">
              <img src={AboutCardImg1} alt="img" />
              <div className="aboutUs--content__card--content">
                <h1>Organic Foods Only</h1>
                <p>
                  Simply dummy text of the printing and typesetting <br />{" "}
                  industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="mainAboutUs--content__card">
              <img src={AboutCardImg2} alt="img" />
              <div className="aboutUs--content__card--content">
                <h1>Quality Standards</h1>
                <p>
                  Simply dummy text of the printing and typesetting <br />{" "}
                  industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <button>
              Shop Now{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAboutUs;
