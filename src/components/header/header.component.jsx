import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useSelector } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.reducer";
import { selectCartHidden } from "../../store/cart/cart.reducer";

const Header = () => {
  const user = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {user ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

export default Header;
