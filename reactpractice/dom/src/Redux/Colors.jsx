



import { createSlice } from "@reduxjs/toolkit";

const Colors = createSlice({
  name: "mycolor",
  initialState: {
    bgcolor: "red",
  },
  reducers: {
    myclr: (state, action) => {
      state.bgcolor = action.payload;
    },
  },
});

export default Colors.reducer;
export const { myclr } = Colors.actions;





















// import { createSlice } from "@reduxjs/toolkit"



// const Colors=createSlice({
  
//     name:"mycolor",
//     initialState:{
//     bgcolor: "red",
//     },

//     reducers:{
//         myclr: (state,actions)=>{
//            state.bgcolor=actions.payload;
//         }
//     }

// })

// export default Colors.reducer;
// export const{myclr}=Colors.actions;