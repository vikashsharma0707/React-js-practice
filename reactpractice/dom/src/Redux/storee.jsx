import { configureStore } from "@reduxjs/toolkit";
import mycl from "./Colors";

const store = configureStore({
  reducer: {
    mycolor: mycl,
  },
});

export default store;