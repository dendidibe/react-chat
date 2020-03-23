import React from "react";

const Message = ({ message: { user, text }, name }) => {
  let isCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();


  if (user === trimmedName) {
    isCurrentUser = true;
  }
  if (user === 'Admin') {
      return (
          <div className="invited-message">
              <p className="invited-message__text">
                  {text}
              </p>
          </div>
      )
  }
    return isCurrentUser ? (
      <div className="message--me">
        <div className="message--me__user">{user}</div>
        <div className="message--me__text">{text}</div>
      </div>
    ) : (
      <div className="message--you">
        <div className="message--you__user">{user}</div>
        <div className="message--you__text">{text}</div>
      </div>
    );
};

export default Message;
