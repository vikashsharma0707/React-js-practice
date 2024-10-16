import { createSlice } from "@reduxjs/toolkit";




const Todo = createSlice({
    name:"addt",
    initialState:{
        task:[]
    },

    reducers:{
        addtask:(state,actions)=>(
            state.task.push(actions.payload)
        )
    }
})

export default Todo.reducer;
export  const {addtask} = Todo.actions