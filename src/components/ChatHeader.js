import React, {useContext} from "react";
import Context from "./Context/Context";

const ChatHeader = ({ room }) => {
    const { users } = useContext(Context);

    return (
    <header className="chat-header">
      <div className="chat-header__room">
        <span className="chat-header__room--title">Room: {room}</span>
      </div>
      <span className="chat-header__users">Users in room: {users.length}</span>
    </header>
  );
};

export default ChatHeader;
