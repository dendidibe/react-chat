import {initialState} from "./ContextState";

export const reducer = (state = initialState, action) => {
    const { name, room } = action.payload;
    switch (action.type) {
        case "RECEIVE_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        case "RECEIVE_USERS":
            return {
                ...state,
                users: action.payload
            };
        case "NEW_USER":
        case "RESTORE_USER":
            return {
                ...state,
                name,
                room
            };

        default:
            return state;
    }
};
