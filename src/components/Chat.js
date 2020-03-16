import React, {useContext, useEffect} from 'react';
import Search from "./Search";
import TopicsList from "./TopicsList";
import ChatHeader from "./ChatHeader";
import Context from "./Context/Context";
import Footer from "./Footer";
import Messages from "./Messages";

const Chat = () => {
    const {messages, room, name, dispatch, sendMessage} = useContext(Context);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('loginData'));
        if (user) dispatch({type: 'RESTORE_USER', payload: user});
    }, [])

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