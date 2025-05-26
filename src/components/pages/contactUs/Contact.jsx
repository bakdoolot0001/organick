import React, { useState } from "react";
import "./Contact.scss";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const errorMessage = () => {
    toast.error("Заполните пустые поля!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const succesMessage = () => {
    toast.success("Ваши данные успешно отправлены!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const token = `7937809018:AAH3Tbt7Q5KKIgjO2S9COEqp3aK6hV7zCLs`;
  const myId = `-1002603417757`;
  const apiKey = `https://api.telegram.org/bot${token}/sendMessage`;

  function sendMessage() {
    if (!name.trim() || !company.trim() || !email.trim() || !subject.trim() || !message.trim() ) {
      errorMessage();
      return;
    } else {
      const data = {
        parse_mode: "HTML",
        chat_id: myId,
        text: `<b>Contacts:</b> \n
<b>👤Full Name:</b> ${name} 
        \n<b>Company:</b> ${company}
         \n📧<b>Email:</b> ${email}
          \n<b>Subject:</b> ${subject}
           \n<b>Message:</b> ${message}`,
      };
      axios.post(apiKey, data);
      succesMessage();
      setName("");
      setCompany("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }

  return (
    <div id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact--form">
            <div className="contact--form__formBlock">
              <label>Full Name*</label>
              <input
                type="text"
                placeholder="Your Email Address"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label>Company*</label>
              <input
                type="text"
                placeholder="Your Company Name"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />
            </div>
            <div className="contact--form__formBlock">
              <label>Your Email*</label>
              <input
                type="text"
                placeholder="example@youremail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label>Subject*</label>
              <input
                type="text"
                placeholder="How can we help"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
            </div>
          </div>
          <div className="contact--messageText">
            <label>Message*</label>
            <textarea
              placeholder="hello there,i would like to talk about how to..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <button onClick={() => sendMessage()}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
