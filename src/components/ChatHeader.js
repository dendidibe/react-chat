import React from 'react';

const ChatHeader = ({activeRoom}) => {
    return (
        <header>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""/>
            <div>
                <h2>{activeRoom}</h2>
                <h3>{activeRoom.length}</h3>
            </div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt=""/>
        </header>
    );
};

export default ChatHeader;