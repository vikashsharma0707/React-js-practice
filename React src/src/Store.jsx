import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./colorSlice";
import myRed from "./todoSlice";
import myans from "./counterSlice"

const store=configureStore({
    reducer:{
        mycolor:myreducer,
        "todo":myRed,
        mycounter:myans
    }
})
export default store;




