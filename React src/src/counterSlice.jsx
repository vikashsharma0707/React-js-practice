import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"mycounter",
    initialState:{
        cnt:0
    },
    reducers:{
        myinc:(state)=>{
            state.cnt=state.cnt+10;
        },
        mydic:(state)=>{
            state.cnt=state.cnt-10;
        }
    }
})

export default counterSlice.reducer;
export const {myinc,mydic}=counterSlice.actions;
