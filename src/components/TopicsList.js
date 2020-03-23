import React, { useContext } from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import Context from "./Context/Context";

const TopicsList = () => {
  const { users } = useContext(Context);

  return (
    <aside className="chat-menu">
      <div className="chat-menu__header">
        <h3 className="chat-menu__title">Users in room</h3>
      </div>
      <div className="chat-menu__rooms">
        <div className="chat-menu__room">
          <div className="chat-menu__room--description">
            {users &&
              users.map(({ name, id }) => (
                <ListItem key={id} button>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TopicsList;
