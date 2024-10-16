import { createSlice } from "@reduxjs/toolkit";




const Todo = createSlice({
    name:"addt",
    initialState:{
        task:[]
    },

    reducers:{
        addtask:(state,actions)=>{
            state.task.push(actions.payload)
        },

        taskComplete:(state, actions)=>{
            
            for (var i=0; i<state.task.length; i++)
            {
                if (state.task[i].id==actions.payload)
                {
                    state.task[i].complete=true;
                }
            }
        },


        taskunComplete:(state, actions)=>{
            
            for (var i=0; i<state.task.length; i++)
            {
                if (state.task[i].id==actions.payload)
                {
                    state.task[i].complete=false;
                }
            }
        },

        editsave:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload){
                    state.task[i].work=actions.payload.work
                }
            }
        }
    }
})

export default Todo.reducer;
export const {addtask,taskComplete,taskunComplete,editsave} = Todo.actions