import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Employee from './Components/employee';
import Signup from './Components/Signup';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(<BrowserRouter>
    <Route path="/" component={Signup} />
    <Route path="/employee/:name/:password" component={Employee} />
</BrowserRouter>, document.getElementById('root'));
