import React, {useContext, useEffect, useState} from 'react';
import Search from "./Search";
import TopicsList from "./TopicsList";
import ChatHeader from "./ChatHeader";
import Context from "./Context/Context";
import Footer from "./Footer";
import Message from "./Message";

const Chat = () => {
    const {chats} = useContext(Context);
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
                    <ul id="chat">
                        {chats[activeRoom].map((room, index) => <Message key={index} room={room}/>)}
                    </ul>
                    <Footer activeRoom={activeRoom} />
                </main>
            </div>
        </div>
    );
};

export default Chat;