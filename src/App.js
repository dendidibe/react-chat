import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";
import {ProtectedRoute} from "./components/ProtectedRoute";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <ProtectedRoute path='/chat'>
          <Route component={Chat} />
        </ProtectedRoute>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
