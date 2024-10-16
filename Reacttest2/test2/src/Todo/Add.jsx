import { createSlice } from "@reduxjs/toolkit";




const Add= createSlice({
    name:"addt",
    initialState:{
        task:[]
    },

    reducers:{
        addtask:(state,actions)=>{
            state.task.push(actions.payload)
        },

        deltask:(state,actions)=>{
            state.task=state.task.filter(item=>item.id!=actions.payload)
        },

          taskc:(state,actions)=>{
            for( var i=0;i<state.actions.length;i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].complete =true
                }
            }
        },


        taskun:(state,actions)=>{
            for( var i=0;i<state.actions.length;i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].complete =false
                }
            }
        }
    }
})

export default Add.reducer;
export const {addtask,deltask,taskc,taskun} = Add.actions;