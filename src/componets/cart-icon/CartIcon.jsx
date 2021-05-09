import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cartActions.js";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const CustomizedBadges = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={2} color="error">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(null, mapDispatchToProps)(CustomizedBadges);
