import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import toast from "react-hot-toast";
import Progress from "../progress/Progress";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.scss";

const Header = ({ currentUser, hidden }) => {
  const showToast = () => {
    toast("You are logged out!", {
      duration: 4000,
      style: { fontSize: "18px", fontWeight: "bold" },
      icon: "❌❌❌",
    });
  };

  const showSignInOut = () => {
    return currentUser ? (
      <div
        className="option flex"
        onClick={() => {
          auth.signOut();
          showToast();
        }}
      >
        SIGN OUT
        <img src={currentUser.photoURL} alt="User avatar" className="avatar" />
      </div>
    ) : (
      <Link to="/signin" className="option">
        <Progress />
      </Link>
    );
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {showSignInOut()}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
