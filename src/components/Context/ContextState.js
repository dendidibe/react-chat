import React, {useEffect, useReducer} from 'react';
import Context from "./Context";
import io from 'socket.io-client';

export const initialState = {
    name: '',
    room: '',
    message: '',
    messages: []
}

export const reducer = (state = initialState, action) => {
    const {name, room} = action.payload;
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };

        case 'NEW_USER':
        case 'RESTORE_USER':
            return {
                ...state,
                name, room
            }


        default:
            return state
    }
}

let socket;


const ContextState = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {message, messages, name, room} = state;

    if (!socket) {
        socket = io(':3001');
    }
    useEffect(() => {
        if (name && room) {
            socket.emit('join', {name, room}, (error) => {
                if(error) {
                    alert(error)
                }
            })
        }

    }, [name, room]);

    useEffect(() => {
        socket.on('message', (message)=> {
            dispatch({type: 'RECEIVE_MESSAGE', payload: message})
        });

        return () => {
            socket.emit('disconnect');
            socket.off()
        }
    },[messages]);

    function sendMessage(message) {
        socket.emit('sendMessage', message, () => {console.log(' ')})
    }

    return (
        <Context.Provider value={{message, messages, name, room, dispatch, sendMessage}}>
            {children}
        </Context.Provider>
    );
};

export default ContextState;