import React, { useEffect, useReducer } from "react";
import Context from "./Context";
import io from "socket.io-client";
import {reducer} from "./reducer";

export const initialState = {
  name: "",
  room: "",
  users: "",
  message: "",
  messages: []
};
let socket;

const ContextState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { message, messages, users, name, room } = state;

  if (!socket) {
    socket = io(":3001");
  }
  useEffect(() => {
    if (name && room) {
      socket.emit("join", { name, room }, error => {
        if (error) {
          alert(error);
        }
      });
    }
  }, [name, room]);

  useEffect(() => {
    socket.on("roomData", ({ users }) => {
      dispatch({ type: "RECEIVE_USERS", payload: users });
    });

    socket.on("message", message => {
      dispatch({ type: "RECEIVE_MESSAGE", payload: message });
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [messages, users]);

  function sendMessage(message) {
    socket.emit("sendMessage", message, () => {
      console.log(" ");
    });
  }

  return (
    <Context.Provider
      value={{
        users,
        message,
        messages,
        name,
        room,
        dispatch,
        sendMessage
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextState;
