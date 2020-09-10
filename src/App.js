import React from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";
import { ProtectedRoute } from "./components/ProtectedRoute";
import history from "./components/history/history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <ProtectedRoute path="/chat">
          <Route component={Chat} />
        </ProtectedRoute>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
