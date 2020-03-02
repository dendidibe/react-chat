import React from 'react';

const ChatListItem = () => {
    return (
        <>
            <li className="you">
                <div className="entete">
                    <span className="status green"/>
                    <h2>Vincent</h2>
                    <h3>10:12AM, Today</h3>
                </div>
                <div className="triangle"/>
                <div className="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </div>
            </li>
            <li className="me">
                <div className="entete">
                    <h3>10:12AM, Today</h3>
                    <h2>Vincent</h2>
                    <span className="status blue"/>
                </div>
                <div className="triangle"/>
                <div className="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </div>
            </li>
        </>
    );
};

export default ChatListItem;