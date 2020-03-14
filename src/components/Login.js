import React, {useState, useContext} from 'react';
import Context from "./Context/Context";
import './Login.css'
import {Link} from "react-router-dom";


const Login = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const {dispatch} = useContext(Context)
    const payload = {name, room};
    const action = (payload) => {
        dispatch({type: 'NEW_USER', payload})
        setName('');
        setRoom('')
    }

    return (
        <div className="joinOuterContainer">
            <form className="joinInnerContainer" onSubmit={e => {e.preventDefault(); action(payload)}}>
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input placeholder="Room" className="joinInput mt-20" type="text" value={room} onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link  to='/chat' onClick={e => (!name || !room) ? e.preventDefault() : action(payload)}>
                    <button className={'button mt-20'} type="submit"  >Sign In</button>
                </Link>
            </form>
        </div>
    );
};

export default Login;