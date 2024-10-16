import { createSlice } from "@reduxjs/toolkit"



const Colorchange=createSlice({
    name:"mycolor",
    initialState:{
        bgcolor:"red"
    },

    reducers:{
        changeColor:(state,actions)=>{
          state.bgcolor=actions.payload;
        }
    }
})
   

export default Colorchange.reducer;
export const {changeColor} =Colorchange.actions