import { configureStore } from "@reduxjs/toolkit";
import task from "./Colorslice"




const store =configureStore({
    reducer:{
        todo:task,
    }
})

export default store;