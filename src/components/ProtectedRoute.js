import React, {useContext} from "react";
import Context from "./Context/Context";
import {Redirect, Route} from "react-router-dom";

export function ProtectedRoute({ children, ...rest }) {
    const {name, room} = useContext(Context);
    const {user} = JSON.parse(localStorage.getItem("loginData"));

    const isAuthenticated = !!((name && room) || user);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}