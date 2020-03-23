import React from "react";
import Message from "./Message";

const Messages = ({ messages, name }) => {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <Message key={index} message={message} name={name} />
      ))}
    </div>
  );
};

export default Messages;
