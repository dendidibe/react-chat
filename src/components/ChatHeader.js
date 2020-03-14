import React from 'react';

const ChatHeader = ({name, room}) => {
    return (
        <header>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""/>
            <div>
                <h2>{name}</h2>
                <h3>Room: {room}</h3>
            </div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt=""/>
        </header>
    );
};

export default ChatHeader;