
import { useSelector, useDispatch } from "react-redux";
import { addTask, delTask, taskComplete, taskUncom, editSave} from "./todoSlice";
import { useState } from "react";

const Insert=()=>{
  const mywork=useSelector((state)=>state.todo.task);
  const [val, setVal]=useState("");
  const [mybtn, setMybtn]=useState(true);
  const [edtID, setEdtID]= useState("");
 
  const dispatch= useDispatch();
  console.log(mywork)
  const addmyTask=()=>{
    dispatch(addTask({id:Date.now(), work:val, complete:false}));
    setVal("")

}


const recDel=(id)=>
{
   dispatch(delTask(id))
}

const workComp=(id)=>{
     dispatch(taskComplete(id))
}

const workUncomp=(id)=>{
     dispatch(taskUncom(id));
}

const workEdit=(id, work)=>{
    setVal(work)
    setMybtn(false)
    setEdtID(id)
    
}

const editdataSave=(myid, mywork)=>{
    dispatch(editSave({id:myid, work:mywork}))
    setMybtn(true);
    setVal("")
}

  let sno=0;
  const ans=mywork.map((key)=>{
     sno++;
    return(
      <>
        <tr>
          <td>{sno} </td>
          <td> 
     
 {key.complete? <span style={{textDecoration:"line-through", color:"red"}}>
  {key.work}</span> : key.work }
            </td>
          <td> 
            <button onClick={()=>{recDel(key.id)}}>Delete</button>
          </td>
          <td> 
              <button onClick={()=>{workComp(key.id)}}> Complete</button>
              <button onClick={()=>{workUncomp(key.id)}}> UnComplete</button>
          </td>
          <td>
               <button onClick={()=>{workEdit(key.id, key.work)}}> Edit </button>

          </td>
        </tr>
      </>
    )
  })
  return(
    <>
      <h1 style={{textAlign:"center",fontStyle:"italic",color:"brown",textDecorationLine:"overline"}}> To Do App</h1>
      Enter Task : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
    
      {mybtn? ( <button onClick={addmyTask}>
        Add
      </button>) : (

        <button onClick={()=>{editdataSave(edtID, val)}}> Edit Save</button>
      ) }
     
      <hr size="4" color="red"/>
      <table border="1" width="400" align="center">
        <tr>
          <th> #</th>
          <th> Your Task </th>
          <th> </th>
          <th></th>
        </tr>
        {ans}
      </table>
      
    </>
  )
}
export default Insert;



