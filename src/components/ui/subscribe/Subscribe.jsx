import React, { useState } from "react";
import SubscribeImg from "../../../assets/images/Subscribe.svg";
import axios from "axios";
import { toast, ToastContainer, Slide } from "react-toastify";
import "./Subscribe.scss";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const token = `7937809018:AAH3Tbt7Q5KKIgjO2S9COEqp3aK6hV7zCLs`;
  const myId = `-1002603417757`;
  const apiKey = `https://api.telegram.org/bot${token}/sendMessage`;

  function sendMessage() {
    const data = {
      parse_mode: "HTML",
      chat_id: myId,
      text: `📨 <b>Email клиента:</b> ${email}`,
    };

    if (!email) {
      toast.error("Please enter email!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      return;
    }

    axios.post(apiKey, data);
    console.log(data);
    setEmail("");

    toast.success("You have successfully subscribed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }

  return (
    <section id="subscribe">
      <div
        className="subscribe"
        style={{
          backgroundImage: `url(${SubscribeImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="subscribe-text">
          <h1>
            Subscribe to <br /> our Newsletter
          </h1>
        </div>
        <div className="subscribe-enter">
          <input
            type="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button type="submit" onClick={sendMessage}>
            Subscribe
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Subscribe;