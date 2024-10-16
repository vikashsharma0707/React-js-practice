import { configureStore } from "@reduxjs/toolkit";
import myRed from "./todoSlice";

const store= configureStore({
    reducer:{
      "todo":myRed

    }
})

export default store;