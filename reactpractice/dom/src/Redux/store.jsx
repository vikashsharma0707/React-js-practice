import { configureStore } from "@reduxjs/toolkit";
import myans from "./Counterslice"




const store = configureStore({
   reducer:{
    mycounter: myans
   }
})

export default store;