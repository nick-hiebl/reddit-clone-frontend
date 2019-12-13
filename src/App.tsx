import React from 'react';

import {
  Switch, Route, BrowserRouter
} from 'react-router-dom';

import './App.css';
import AllUsers from 'pages/AllUsers';
import Navbar from 'components/Navbar';
import UserPage from 'pages/UserPage';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/users">
          <AllUsers />
        </Route>
        <Route path="/user/:username">
          <UserPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
