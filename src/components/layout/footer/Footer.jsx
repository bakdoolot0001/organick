import React from "react";
import "./Footer.scss";
import logo from "../../../assets/images/Logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--left">
            <h1>Contact Us</h1>
            <h2>Email</h2>
            <h4>needhelp@Organia.com</h4>
            <h2>Email</h2>
            <h4>needhelp@Organia.com</h4>
            <h2>Email</h2>
            <h4>needhelp@Organia.com</h4>
          </div>
          <div className="footer--center">
            <img src={logo} alt="img" width={200} />
            <h4>
              Simply dummy text of the printing and typesetting industry. <br />{" "}
              Lorem Ipsum simply dummy text of the printing
            </h4>
            <div className="footer--center__icons">
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaFacebook />
              </a>
              <a>
                <FaTwitter />
              </a>
              <a>
                <FaPinterest />
              </a>
            </div>
          </div>
          <div className="footer--right">
            <h1>Utility Pages</h1>
            <h4>Style Guide</h4>
            <h4>404 Not Found</h4>
            <h4>Password Protected</h4>
            <h4>Licences</h4>
            <h4>Changelog</h4>
          </div>
        </div>
      </div>
      <hr />
      <div className="subFooter">
        <h2>Copyright © Organick</h2>
      </div>
    </footer>
  );
};

export default Footer;
