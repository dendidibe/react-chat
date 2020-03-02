import React from 'react';
import Search from "./components/Search";
import TopicsList from "./components/TopicsList";
import ChatList from "./components/ChatList";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <div id="container">
        <aside>
          <Search />
          <TopicsList />
        </aside>
        <main>
          <header>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""/>
              <div>
                <h2>Chat with Vincent Porter</h2>
                <h3>already 1902 messages</h3>
              </div>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt=""/>
          </header>
         <ChatList/>
          <footer>
            <Input/>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt=""/>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt=""/>
                <a href="#">Send</a>
          </footer>
        </main>
      </div>

    </div>
  );
}

export default App;
