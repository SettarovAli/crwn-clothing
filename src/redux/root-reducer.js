import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";

const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default reducer;
