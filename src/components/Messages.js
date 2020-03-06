import React, {useContext} from 'react';
import Message from "./Message";
import Context from "./Context/Context";


const Messages = ({activeRoom}) => {

    const [rooms] = useContext(Context)
    return (
        <div>
            <ul id="chat">
                {rooms[activeRoom].map((room, index) => <Message key={index} room={room}/>)}
            </ul>
        </div>
    );
};

export default Messages;