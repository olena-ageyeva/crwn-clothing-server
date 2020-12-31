import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-page/sign-in.component";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.actions";
import { selectCurrentUser } from "./store/user/user.reducer";

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
  const user = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  //let unsubscribeFromAuth = null;
  console.log("store user", user);

  const onAuthChange = React.useCallback(
    async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) =>
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }))
        );
      } else dispatch(setCurrentUser(userAuth));
    },
    [dispatch]
  );

  React.useEffect(() => {
    auth.onAuthStateChanged(onAuthChange);
  }, [onAuthChange]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/sign-in"
          render={() => (user ? <Redirect to="/" /> : <SignInPage />)}
        />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/:name" component={Page} />
      </Switch>
    </div>
  );
}

export default App;
