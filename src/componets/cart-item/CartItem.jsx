import React from "react";

import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cartActions";
import ClearItem from "../clear-item/ClearItem";

import "./CartItem.scss";

const CartItem = ({ item, clearItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">Quantity: {quantity}</span>
        <span className="price">Price: ${price}</span>
        <div className="delete-icon" onClick={() => clearItem(item)}>
          <ClearItem size="small" />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
