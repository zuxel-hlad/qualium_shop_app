import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../../components/app-header/app-header";
import AppFooter from "../../components/app-footer/app-footer";
import CreateView from "../../pages/create-view/create-view";
import EditView from "../../pages/edit-view/edit-view";
import MainView from "../../pages/main-view/main-view";
import CartView from "../../pages/cart-view/cart-view";
import ErrorPage from "../../pages/404-page/404-page";
import AppProvider from "../app-provider/app-provider";
import "./app.scss";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <AppHeader />
          <main className="app-main">
            <Switch>
              <Route exact path="/" component={MainView} />
              <Route exact path="/cart-view" component={CartView} />
              <Route exact path="/create-view" component={CreateView} />
              <Route exact path="/edit-view/product-:slug" component={EditView} />
              <Route path="*" component={ErrorPage} />
            </Switch>
          </main>
          <AppFooter />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
