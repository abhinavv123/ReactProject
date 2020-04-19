import React from 'react';
import './App.css';
import Signup from './Components/Signup';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Employee from './Components/employee';
import '../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <BrowserRouter>
      <Redirect exact from="/" to="/signup"></Redirect>
      <Route path="/signup" component={Signup} />
      <Route path="/employee/:name/:password" component={Employee} />
    </BrowserRouter>
  );
}

export default App;
