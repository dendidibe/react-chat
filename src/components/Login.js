import React, { useState, useContext, useEffect } from "react";
import Context from "./Context/Context";
import { Link } from "react-router-dom";
import {TextField, Button} from "@material-ui/core";

const Login = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const { dispatch } = useContext(Context);
  const loginData = { name, room };

  useEffect(() => {
    localStorage.setItem("loginData", JSON.stringify(loginData));
  }, [loginData]);

  const sendData = payload => {
    dispatch({ type: "NEW_USER", payload });
    setName("");
    setRoom("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendData(loginData);
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submitHandler}>
      <TextField id="outlined-basic" label="Name" variant="outlined" className="login-form__input" value={name} onChange={e => setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Room" variant="outlined" className="login-form__input" value={room} onChange={e => setRoom(e.target.value)}/>
        <Link
          to="/chat"
          onClick={e => (!name || !room ? e.preventDefault() : sendData(loginData))}
        >
          <Button variant="contained" type="submit" className="login-form__button">Sign In</Button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
