import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import menusReducer from "./menuSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    menus: menusReducer,
  },
});
