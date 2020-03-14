import React, {useContext, useEffect, useReducer} from 'react';
import Search from "./Search";
import TopicsList from "./TopicsList";
import ChatHeader from "./ChatHeader";
import Context from "./Context/Context";
import Footer from "./Footer";
import Messages from "./Messages";
import io from 'socket.io-client'
let socket;

const Chat = () => {
    const {message, messages, room, name, dispatch, sendMessage} = useContext(Context);





    return (
        <div className="App">
            <div id="container">
                <aside>
                    <Search />
                    <TopicsList />
                </aside>
                <main>
                    <ChatHeader  name={name} room={room}/>
                    <Messages messages={messages} name={name}/>
                    <Footer sendMessage={sendMessage} />
                </main>
            </div>
        </div>
    );
};

export default Chat;