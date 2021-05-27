import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cartSelectors.js";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const CustomizedBadges = ({ size }) => {
  return (
    <div>
      <IconButton aria-label="cart">
        <DeleteIcon color="error" fontSize={size} />
      </IconButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CustomizedBadges);
