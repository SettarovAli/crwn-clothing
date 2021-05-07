import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import toast from "react-hot-toast";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import avatar from "../../images/avatar.png";

import "./Header.scss";

const Header = ({ currentUser }) => {
  const showToast = () => {
    toast("You are logged out!", {
      duration: 4000,
      style: { fontSize: "18px", fontWeight: "bold" },
      className: "",
      // Custom Icon
      icon: "❌❌❌",
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#fff",
        secondary: "#4CAF50f",
      },
      // Aria
      role: "status",
      ariaLive: "polite",
    });
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
        {currentUser ? (
          <div
            className="option flex"
            onClick={() => {
              auth.signOut();
              showToast();
            }}
          >
            SIGN OUT
            <img
              src={currentUser.photoURL ? currentUser.photoURL : avatar}
              alt="User avatar"
              className="avatar"
            />
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
