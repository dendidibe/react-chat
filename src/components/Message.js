import React from 'react';

const Message = ({ message: {user, text}, name }) => {
    let isCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isCurrentUser = true
    }
    return (
        isCurrentUser ? (<li className="me">
                <div className="entete">
                    <span className="status green"/>
                    <h2>{user}</h2>
                </div>
                <div className="triangle"/>
                <div className="message">
                    {text}
                </div>
            </li>) :
            (<li className="you">
                <div className="entete">
                    <span className="status green"/>
                    <h2>{user}</h2>
                </div>
                <div className="triangle"/>
                <div className="message">
                    {text}
                </div>
            </li>)
    )
};

export default Message;