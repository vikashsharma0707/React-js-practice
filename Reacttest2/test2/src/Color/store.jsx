import { configureStore } from "@reduxjs/toolkit";

import myreducer from "./Colorchange";


const store = configureStore({
    reducer:{
        mycolor:myreducer
    }
})

export default store;