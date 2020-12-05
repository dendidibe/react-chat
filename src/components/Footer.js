import React, { useState } from "react";
import sendButton from '../assets/telegram.png';

const Footer = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    if (message)  sendMessage(message);
    setMessage("");
  };

  return (
    <form className="chat-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Write a message"
        className="chat-form__input"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">
        <img src={sendButton} alt="" />
      </button>
    </form>
  );
};

export default Footer;
