import { createSlice } from "@reduxjs/toolkit";




const Add = createSlice({
    name:"add",
    initialState:{
        cnt :0
    },

    reducers:{
        myinc:(state)=>{
            state.cnt=state.cnt+1;
        },

        mydec:(state)=>{
            state.cnt=state.cnt-1;
        }
    }


})

export default Add.reducer;
export const {myinc,mydec} = Add.actions;