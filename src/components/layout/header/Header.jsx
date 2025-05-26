import React, { useContext } from "react";
import "./Header.scss";
import logo from "../../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { productContext } from "../../../context";

const Header = () => {
  const { basket } = useContext(productContext);
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"}>
            <img src={logo} alt="img" />
          </Link>
          <div className="header--nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/project"}>Project</Link>
            <Link to={"/admin"}>Admin</Link>
          </div>
          <div className="header--right">
            <div className="header--right__search">
              <div className="header--right__search--input">
                <input type="text" />
                <a>
                  <CiSearch />
                </a>
              </div>
            </div>
            <Link to={"/basket"}>
              <div className="header--right__cart">
                <div className="header--right__cart--cartIcon">
                  <h3>
                    <IoCartOutline />
                  </h3>
                  <h4>Cart({basket.length})</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
