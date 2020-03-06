import React, {useReducer} from 'react';
import Context from "./Context";
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
                [room]: [{user, text}]
            }
        case 'NEW_ROOM':
            return {
                ...state,
                [room]: [{user, text: ''}]
            }
        default:
            return state
    }
}
const ContextState = ({children}) => {
    const reducerHook = useReducer(reducer, initialState)
    return (
        <Context.Provider value={reducerHook}>
            {children}
        </Context.Provider>
    );
};

export default ContextState;