import { createSlice } from "@reduxjs/toolkit";




const Colorslice = createSlice({
    name:"todo",
    initialState:{
        bgcolor:"red",
    },


   reducers :{
    colorchange : (state,actions)=>{
         state.bgcolor =actions.payload
    }
   }
})

export default Colorslice.reducer
export const {colorchange} =Colorslice.actions;