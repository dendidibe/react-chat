import React from 'react';


const Message = ({room}) => {

    return (
        <>
            <li className="you">
                <div className="entete">
                    <span className="status green"/>
                    <h2>{room.user}</h2>
                </div>
                <div className="triangle"/>
                <div className="message">
                    {room.text}
                </div>
            </li>
        </>
    );
};

export default Message;