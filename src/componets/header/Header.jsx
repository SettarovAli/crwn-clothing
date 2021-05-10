import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import toast from "react-hot-toast";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
// import Progress from "../progress/Progress";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/userSelector";

import Drawer from "../drawer/Drawer";
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
        {currentUser.photoURL ? (
          <img
            src={currentUser.photoURL}
            alt="User avatar"
            className="avatar"
          />
        ) : (
          <AccountCircleTwoToneIcon className="avatar" color={"action"} />
        )}
      </div>
    ) : (
      <Link to="/signin" className="option">
        {/* <Progress /> */}
        SIGN IN
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
        <Drawer />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
