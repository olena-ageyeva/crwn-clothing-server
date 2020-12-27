import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-page/sign-in.component";
import { Switch, Route } from "react-router-dom";

const Page = ({
  match: {
    params: { name },
  },
}) => (
  <div>
    <h1>{name.toUpperCase()} PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
