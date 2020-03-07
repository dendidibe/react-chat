import React, {useReducer} from 'react';
import Context from "./Context";
import io from 'socket.io-client';

export const initialState = {
    general: [{user: 'Dave', text: 'Hi', room: 3111}],
    work: [{user: 'USer', text: 'Fuck', room: 3111}]
}

export const reducer = (state = initialState, action) => {
    const {user, text, room} = action.payload;
    switch (action.type) {
        case 'RECEIEVE_MESSAGE':
            return {
                ...state,
                [room]: [...state[room], {user, text}]
            };
        default:
            return state
    }
}

let socket;
function sendMessage(value) {
    socket.emit('message', value)
}

const ContextState = ({children}) => {
    const [chats, dispatch] = useReducer(reducer, initialState)
    if (!socket) {
        socket = io(':3001')
        socket.on('message', (msg) => {
            dispatch({type: 'RECEIEVE_MESSAGE', payload: msg})
        })
    }
    const user = 'misha' + Math.random(100).toFixed()
    return (
        <Context.Provider value={{chats, sendMessage, user}}>
            {children}
        </Context.Provider>
    );
};

export default ContextState;