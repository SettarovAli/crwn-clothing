import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cartSelectors.js";

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

const CustomizedBadges = ({ itemCount, onHandleClick }) => {
  return (
    <div className="cart-icon" onClick={onHandleClick}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={itemCount} color="error">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CustomizedBadges);
