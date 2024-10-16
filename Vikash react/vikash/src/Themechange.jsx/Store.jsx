import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./Colorchnage"




const Store= configureStore({
   reducer:{
     mycolor:myreducer,
   }
})

export default Store;