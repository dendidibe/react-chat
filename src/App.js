import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Chat from "./components/Chat";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" exact component={Login}/>

            <Route path="/chat" component={Chat} />
            <Redirect to="/"/>
          </Switch>
      </Router>

  );
}

export default App;
