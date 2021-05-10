import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { toggleCartHidden } from "../../redux/cart/cartActions.js";

import Drawer from "@material-ui/core/Drawer";
import CartDropdown from "../cart-dropdown/CartDropdown";
import CartIcon from "../cart-icon/CartIcon";

const TemporaryDrawer = ({ hidden, toggleCartHidden }) => {
  return (
    <React.Fragment>
      <CartIcon onHandleClick={toggleCartHidden} />

      <Drawer anchor={"right"} open={!hidden} onClose={toggleCartHidden}>
        <CartDropdown />
      </Drawer>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer);
