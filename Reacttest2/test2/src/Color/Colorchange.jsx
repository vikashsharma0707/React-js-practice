import { createSlice } from "@reduxjs/toolkit";



const Colorchange = createSlice({
    name:"mycolor",
    initialState:{
        mycol:"red",
        cnt:0
    },

    reducers:{
        changecolor:(state,actions)=>{
           state.mycol = actions.payload;
        },

        myinc:(state)=>{
            state.cnt=state.cnt+1;
        },

        mydec:(state)=>{
            state.cnt=state.cnt-1;
        }

    }
})

export default Colorchange.reducer;
export const {changecolor,myinc,mydec} = Colorchange.actions;