import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import ContactPage from '../components/ContactPage';
import IndividualPage from '../components/IndividualPage';
import Portfolio from '../components/Portfolio';
import HomePage from '../components/HomePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/portfolio/:id" component={IndividualPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
); 

export default AppRouter;
