import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../redux/menuSlice";

export default configureStore({
  reducer: {
    menus: menuReducer,
  },
});
