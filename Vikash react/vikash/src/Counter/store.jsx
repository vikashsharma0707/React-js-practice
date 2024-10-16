import { configureStore } from "@reduxjs/toolkit";
import myadd from "./Add"




const store = configureStore({
    reducer:{
         add:myadd
    }
})

export default store;