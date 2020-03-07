import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Chat from "./components/Chat";

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/" component={Chat} />
          </Switch>
      </Router>

  );
}

export default App;
