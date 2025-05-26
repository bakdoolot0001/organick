import React from "react";
import "./MainOurCustomer.scss";
import User from "../../../assets/images/user.svg";
import { IoIosStar } from "react-icons/io";

const MainOurCustomer = () => {
  return (
    <div id="mainOurCustomer">
      <div className="container">
        <div className="mainOurCustomer">
          <div className="mainOurCustomer--content">
            <h3>Testimonial</h3>
            <h1>What Our Customer Saying?</h1>
            <img src={User} alt="img" />
            <div className="mainOurCustomer--content__rate">
              <a>
                <IoIosStar />
              </a>
              <a>
                <IoIosStar />
              </a>
              <a>
                <IoIosStar />
              </a>
              <a>
                <IoIosStar />
              </a>
              <a>
                <IoIosStar />
              </a>
            </div>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy <br /> text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
            <h2>Sara Taylor</h2>
            <h4>Consumer</h4>
            <div className="mainOurCustomer--content__navigation">
              <div className="ourCustomer--content__navigation--dot"></div>
              <div className="ourCustomer--content__navigation--dot"></div>
              <div className="ourCustomer--content__navigation--dot"></div>
            </div>
            <div className="mainOurCustomer--content__counters">
              <div className="ourCustomer--content__counters--lineItem">
                <div className="ourCustomer--content__counters--lineItem__item">
                  <h1>100%</h1>
                  <p>Organic</p>
                </div>
              </div>
              <div className="ourCustomer--content__counters--lineItem">
                <div className="ourCustomer--content__counters--lineItem__item">
                  <h1>285</h1>
                  <p>Active Product</p>
                </div>
              </div>
              <div className="ourCustomer--content__counters--lineItem">
                <div className="ourCustomer--content__counters--lineItem__item">
                  <h1>250+</h1>
                  <p>Organic Orchads</p>
                </div>
              </div>
              <div className="ourCustomer--content__counters--lineItem">
                <div className="ourCustomer--content__counters--lineItem__item">
                  <h1>25+</h1>
                  <p>Years of Farming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainOurCustomer;
