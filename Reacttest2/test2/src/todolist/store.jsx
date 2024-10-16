import { configureStore } from "@reduxjs/toolkit";
import myadd from "./Todo"



const store = configureStore({
    reducer:{
        addt:myadd
    }
})

export default store;