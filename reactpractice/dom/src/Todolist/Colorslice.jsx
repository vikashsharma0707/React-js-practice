import { createSlice } from "@reduxjs/toolkit";




const Colorslice = createSlice({
    name:"todo",
    initialState:{
        mytask:[]
    },

    reducers:{

        addtask:(state,actions)=>{
          state.mytask.push(actions.payload)
        }
    }
})

export default Colorslice.reducer;
export const {addtask} =Colorslice.actions