import { configureStore } from "@reduxjs/toolkit";
import myans from "./Colorslice"


const store = configureStore({
    reducer :{
        todo:myans
    }
})

export default store