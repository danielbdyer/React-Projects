import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {AboutUs} from "./components/AboutUs"
import {ContactUs} from "./components/ContactUs"
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/contact-us" component={ContactUs} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
