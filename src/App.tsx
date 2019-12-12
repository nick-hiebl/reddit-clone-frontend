import React from 'react';

import {
  Switch, Route, BrowserRouter
} from 'react-router-dom';

import './App.css';
import AllUsers from 'pages/AllUsers';
import Navbar from 'components/Navbar';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/users">
          <AllUsers />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
