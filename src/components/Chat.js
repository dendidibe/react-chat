import React, {useContext, useState} from 'react';
import Search from "./Search";
import TopicsList from "./TopicsList";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import Context from "./Context/Context";
import {Link} from "react-router-dom";

const Chat = () => {
    const [chats] = useContext(Context);
    const rooms = Object.keys(chats);
    const [activeRoom, setActiveRoom] = useState(rooms[0]);

    return (
        <div className="App">
            <div id="container">
                <aside>
                    <Search />
                    <TopicsList rooms={rooms} setActiveRoom={setActiveRoom} />
                </aside>
                <main>
                    <ChatHeader activeRoom={activeRoom}/>
                    <Messages activeRoom={activeRoom}/>
                    <Link to='/'>sdfdsfdsfds</Link>
                </main>
            </div>
        </div>
    );
};

export default Chat;