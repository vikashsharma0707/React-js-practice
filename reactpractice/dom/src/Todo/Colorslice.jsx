import { createSlice } from "@reduxjs/toolkit";



const ColorSlice = createSlice({
    name:"todo",
    initialState:{
        task:[]
    },

    reducers: {
      
        mydisplay :(state,actions)=>{
            state.task.push(actions.payload);
        }



    }
})

export default ColorSlice.reducer;
export const {mydisplay} =ColorSlice.actions;