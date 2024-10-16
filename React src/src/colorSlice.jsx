import { createSlice } from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgcolor:"red"
    },
    reducers:{
        changeColor:(state,actions)=>{
            //console.log(action.payload);
            state.bgcolor=actions.payload;
        }
    }
})
export default colorSlice.reducer;
export const {changeColor}=colorSlice.actions;
