import React from 'react';
import Message from "./Message";


const Messages = ({messages, name}) => {

    return (
        <ul id="chat">
            {messages.map((message, index) => <Message key={index} message={message} name={name}/>)}
        </ul>
    );
};

export default Messages;