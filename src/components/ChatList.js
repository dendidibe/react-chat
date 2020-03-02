import React from 'react';
import ChatListItem from "./ChatListItem";

const ChatList = () => {
    return (
        <div>
            <ul id="chat">
               <ChatListItem/>
            </ul>
        </div>
    );
};

export default ChatList;