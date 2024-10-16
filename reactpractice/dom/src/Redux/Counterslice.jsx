import { createSlice } from "@reduxjs/toolkit";



const Counterslice =createSlice({
    name:"mycounter",

    initialState :{
        cnt:0,
    },

    reducers:{

        myincre: (state)=>{
          state.cnt=state.cnt+1;
        },

        mydecre: (state)=>{
            state.cnt=state.cnt-1;
          },

          myreset: (state)=>{
            state.cnt=state.cnt=0;
          }
    }
})

export default Counterslice.reducer;
export const{myincre,mydecre,myreset}= Counterslice.actions;