import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import AppFooter from '../app-footer/app-footer';
import CartView from '../pages/cart-view/cart-view';
import CreateView from '../pages/create-view/create-view';
import EditView from '../pages/edit-view/edit-view';
import MainView from '../pages/main-view/main-view';
import './app.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main className="app-main">
          <Switch>
            <Route exact path="/" component={MainView} />
            <Route exact path="/cart-view" component={CartView} />
            <Route exact path="/create-view" component={CreateView} />
            <Route exact path="/edit-view" component={EditView} />
          </Switch>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
};

export default App;
