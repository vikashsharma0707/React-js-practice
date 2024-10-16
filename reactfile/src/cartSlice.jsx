import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
const cartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state, actions)=>{  
         let data=state.cart.filter((item)=>item.id==actions.payload.id);
         if (data.length>=1)
         {
            message.warning("Product Aleready Added!!!");
         }
         else 
         {
            state.cart.push(actions.payload);
         }  
        },

        cartrecDel:(state, actions)=>{
          state.cart=state.cart.filter((key)=>key.id!=actions.payload);
        
        }
    }
})
export default cartSlice.reducer;
export const {addtoCart, cartrecDel} = cartSlice.actions;