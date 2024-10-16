import { configureStore } from "@reduxjs/toolkit";
import myadd from "./Add"

const store = configureStore({
    reducer:{
         addt:myadd
    }
})
export default store;