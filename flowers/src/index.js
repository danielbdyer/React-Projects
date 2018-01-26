import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AboutUs} from './components/AboutUs'
import {ContactUs} from './components/ContactUs'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {BaseLayout} from './components/BaseLayout'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <Switch>
    <Route path="/contact-us" component={ContactUs} />
    <Route path="/about-us" component={AboutUs} />
    <Route path="/" component={App} />
  </Switch>
  </BaseLayout>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
