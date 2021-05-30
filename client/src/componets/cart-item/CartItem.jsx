import React from "react";

import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cartActions";

import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import TouchIconComponent from "../touch-icon-component/TouchIconComponent";
import DeleteIcon from "@material-ui/icons/Delete";

import "./CartItem.scss";

const CartItem = ({ item, clearItem, removeItem, addItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">Quantity: {quantity}</span>
        <div className="quantity">
          <RemoveCircleOutlineIcon
            onClick={() => removeItem(item)}
            className="btn"
            fontSize="small"
            color="error"
          />
          <AddCircleOutlineIcon
            className="btn"
            fontSize="small"
            color="primary"
            onClick={() => addItem(item)}
          />
        </div>

        <span className="price">Price: ${price}</span>
        <div className="delete-icon" onClick={() => clearItem(item)}>
          <TouchIconComponent
            Icon={DeleteIcon}
            fontSize={"small"}
            color={"error"}
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
