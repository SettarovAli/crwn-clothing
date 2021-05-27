import React from "react";
import toast from "react-hot-toast";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { signOutStart } from "../../redux/user/userActions";

import Drawer from "../drawer/Drawer";

import {
  HeaderContainer,
  HeaderContainerInner,
  LogoContainer,
  LogoImage,
  OptionsContainer,
  OptionLink,
  OptionFlex,
  Avatar,
} from "./HeaderStyles";

const Header = ({ currentUser, hidden, signOutStart }) => {
  const showToast = () => {
    toast("You are logged out!", {
      duration: 4000,
      style: { fontSize: "18px", fontWeight: "bold" },
      icon: "❌❌❌",
    });
  };

  const showSignInOut = () => {
    return currentUser ? (
      <OptionLink
        as="div"
        onClick={() => {
          signOutStart();
          showToast();
        }}
      >
        <OptionFlex>
          SIGN OUT
          {currentUser.photoURL ? (
            <Avatar as="img" src={currentUser.photoURL} alt="User avatar" />
          ) : (
            <Avatar as={AccountCircleTwoToneIcon} color="action" />
          )}
        </OptionFlex>
      </OptionLink>
    ) : (
      <OptionLink to="/signin">SIGN IN</OptionLink>
    );
  };

  return (
    <HeaderContainer>
      <HeaderContainerInner>
        <LogoContainer to="/">
          <LogoImage />
        </LogoContainer>

        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/contact">CONTACT</OptionLink>
          {showSignInOut()}
          <Drawer />
        </OptionsContainer>
      </HeaderContainerInner>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { signOutStart })(Header);
