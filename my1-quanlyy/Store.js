import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Redux/CartReducer";
import { AddressReducer } from "./Redux/AddressReducer";
import userReducer from "./Redux/userSlice.";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    address: AddressReducer,
    user: userReducer,
  },
});

export default store;
