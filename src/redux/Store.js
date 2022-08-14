import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./slice/NameSlice";
const store = configureStore({
  reducer: {
    name: nameReducer,
  },
});

export default store;
