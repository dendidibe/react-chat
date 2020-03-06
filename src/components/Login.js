import React, {useState, useReducer, useEffect} from 'react';
import {initialState, reducer} from "./Context/ContextState";
import './Login.css'
import {Link} from "react-router-dom";


const Login = () => {
    const [user, setUser] = useState('');
    const [room, setRoom] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
    const payload = {user, room}
    const action = (payload) => {
        dispatch({type: 'NEW_ROOM', payload})
        setUser('');
        setRoom('')
    }

    return (
        <div className="joinOuterContainer">
            <form className="joinInnerContainer" onSubmit={e => {e.preventDefault(); action(payload)}}>
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" value={user} onChange={(event) => setUser(event.target.value)} />
                </div>
                <div>
                    <input placeholder="Room" className="joinInput mt-20" type="text" value={room} onChange={(event) => setRoom(event.target.value)} />
                </div>
                    <Link className={'button mt-20'} to='/chat' type="submit">Sign In</Link>
            </form>
        </div>
    );
};

export default Login;