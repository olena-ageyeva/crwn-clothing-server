import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-page/sign-in.component";
import { Switch, Route } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils";

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
  const [user, setUser] = React.useState(null);

  //let unsubscribeFromAuth = null;

  const onAuthChange = React.useCallback(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot((snapShot) =>
        setUser({ id: snapShot.id, ...snapShot.data() })
      );
    } else setUser(userAuth);
  }, []);

  React.useEffect(() => {
    auth.onAuthStateChanged(onAuthChange);
  }, [onAuthChange]);

  return (
    <div>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/:name" component={Page} />
      </Switch>
    </div>
  );
}

export default App;
