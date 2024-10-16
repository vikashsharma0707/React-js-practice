// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addtask, editsave, taskComplete, taskunComplete } from "./Add/Todo";

// const App= ()=>{

//   const myaddd= useSelector((state)=>state.addt.task);
//   const mydis= useDispatch();
//   const [val,setval] = useState("");
//   const [btn,setbtn] =useState(true);
//   const [edit,setedid]=useState("");

  

//   const taskadd= ()=>{
//     mydis(addtask({id:Date.now(),work:val,complete:false}))
//     setval("");
//   }

//   const taskc =(id)=>{
//     mydis(taskComplete(id));
//   }

//   const taskun =(id)=>{
//     mydis(taskunComplete(id));
//   }

//   const savedata=(id,work)=>{
//        setval(work);
//        setbtn(false);
//        setedid(id);
//   }

//   const editdatasave =(myid,mywork)=>{
//     mydis(editsave({id:myid,work:mywork}))
//     setbtn(true);
//     setval("")
//  }

//    let sno= 0;
//    const ans = myaddd.map((key)=>{
//     sno++;
//         return(
//           <>
//             <tr>
//               <td>{sno}</td>
//               <td> 
     
//      {key.complete? <span style={{textDecoration:"line-through", color:"red"}}>
//       {key.work}</span> : key.work }
//                 </td>
//               <td>
//                 <button onClick={()=>{taskc(key.id)}}>complete</button>
//                 <button onClick={()=>{taskun(key.id)}}>uncomplete</button>
//               </td>
//               <td>
//                 <button  onClick={()=>{savedata(key.id,key.work)}}>edit</button>
//               </td>
//             </tr>
          
//           </>
//         )
//    })

//   return(
//     <>
//     <h1>this is todolist</h1>
//     <input type="text"  value={val}   onChange={(e)=> {setval(e.target.value)}}/>
//     {/* <button onClick={taskadd}>Add task</button> */}
//     {btn? ( <button onClick={taskadd}>
//         Add
//       </button>) : (
           
//     <button onClick={()=>{editdatasave(edit,val)}}>edit</button>
//         // <button onClick={()=>{editdataSave(edtID, val)}}> Edit Save</button>
//       ) }


    

//     <table>
//       <tr>
//         <th>sno</th>
//         <th>task</th>
//       </tr>
//       {ans}
//     </table>
    
//     </>
//   )
// }

// export default App;
















// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addtask } from "./todolist/Todo";



// const App=()=>{

//   const myaddd= useSelector((state)=>state.addt.task)
//   const mydis = useDispatch();
//   const [val,setval] =useState("");

//   const dataadd=()=>{
//     mydis(addtask({id:Date.now(),task:val}))
//   }

//   let sno=0;

//   const ans =myaddd.map((key)=>{
//     sno++;
//        return(
//         <>
//            <tr>
//             <th>{sno}</th>
//             <th>{key.task}</th>
//            </tr>
//         </>
//        )
//   })
//   return(
//     <>
//     <h1>Redux todo list</h1>
//     <input type="text"  value={val}   onChange={(e)=>{setval(e.target.value)}}/>
//     <button onClick={dataadd}>Add Task</button>
//     <hr></hr>

//     <table>
//       <tr>
//         <th>sno</th>
//         <th>task</th>
//       </tr>
//       {ans}
//     </table>

//     </>
//   )
// }
// export default App;








/*import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask, deltask, taskc, taskun } from "./Todo/Add";



const App=()=>{

 const myaddd= useSelector((state)=>state.addt.task);
 const  mydis=useDispatch();
 const [val,setval] = useState("");

 const adddata=()=>{
   mydis(addtask({id:Date.now(),task:val,complete:false}));
 }

 const recdel =(id)=>{
   mydis(deltask(id));
 }


 const workcopm=(id)=>{
  mydis(taskc(id));
 }

 const workuncp=(id)=>{
  mydis(taskun(id));
 }

 let sno=0;

 let ans = myaddd.map((key)=>{
  sno++;
  return(
    <>
      <tr>
        <td>{sno}</td>
        <td>{key.task}</td>
        <td><button  onClick={()=>{recdel(key.id)}}>Delete</button></td>
        <td>
          <button onClick={()=>{workcopm(key.id)}}>complete</button>
          <button onClick={()=>{workuncp(key.id)}}>uncomplete</button>
          
          </td>
      </tr>
    </>
  )

 })


  return(
    <>
      <h1>Enter task</h1>
      <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}} />
      <button onClick={adddata}>Addtask</button>
      <hr></hr>
     <table>
      <tr>
        <th>sno</th>
        <th>task</th>
      </tr>
      {ans}
      </table>
    </>
  )
}

export default App;*/



// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addtask, deltask, taskc, taskun } from "./Todo/Add";

// const App = () => {
//   const myaddd = useSelector((state) => state.addt.task);
//   const mydis = useDispatch();
//   const [val, setval] = useState("");

//   const adddata = () => {
//     mydis(addtask({ id: Date.now(), task: val, complete: false }));
//     setval(""); // Clear the input after adding a task
//   };

//   const recdel = (id) => {
//     mydis(deltask(id));
//   };

//   const workcopm = (id) => {
//     mydis(taskc(id));
//   };

//   const workuncp = (id) => {
//     mydis(taskun(id));
//   };

//   let sno = 0;

//   let ans = myaddd.map((key) => {
//     sno++;
//     return (
//       <tr key={key.id}>
//         <td>{sno}</td>
//         <td style={{ textDecoration: key.complete ? "line-through" : "none" }}>
//           {key.task}
//         </td>
//         <td>
//           <button onClick={() => recdel(key.id)}>Delete</button>
//         </td>
//         <td>
//           <button onClick={() => workcopm(key.id)}>Complete</button>
//           <button onClick={() => workuncp(key.id)}>Uncomplete</button>
//         </td>
//       </tr>
//     );
//   });

//   return (
//     <>
//       <h1>Enter task</h1>
//       <input
//         type="text"
//         value={val}
//         onChange={(e) => setval(e.target.value)}
//       />
//       <button onClick={adddata}>Add Task</button>
//       <hr />
//       <table>
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Task</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>{ans}</tbody>
//       </table>
//     </>
//   );
// };

// export default App;























// import { useDispatch, useSelector } from "react-redux"
// import { mydec, myinc } from "./Incre/Add";

// const App=()=>{

//   const myaddd=useSelector((state)=>state.add.cnt);
//   const mydis =useDispatch();
  
//   return(
//     <>
//     <h1>my counter</h1>
//     <button onClick={()=>{mydis(myinc())}}>increment</button>
//     <h1>{myaddd}</h1>
//     <button onClick={()=>(mydis(mydec()))}>decrement</button>
//     </>
//   )
// }

// export default App;

















// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { changecolor } from "./Color/Colorchange";
// import { myinc } from "./Color/Colorchange";
// import { mydec } from "./Color/Colorchange";



// const App=()=>{

//   const myclr = useSelector((state)=>state.mycolor.mycol);
//   const myaddd=useSelector((state)=>state.mycolor.cnt);
//   const mydis = useDispatch();
//   const [clr,setclr] = useState("");
//   return(
//     <>
//      <h1>React toolkit</h1>
//      Enter color <input type="text"  value={clr}  onChange={(e)=>{setclr(e.target.value)}}/>
//      <button onClick={()=>{mydis(changecolor(clr))}}>change color</button>
//      <div style={{width:"500px",height:"500px",backgroundColor:myclr}}>

//      </div>

//      <h1>my counter</h1>
//     <button onClick={()=>{mydis(myinc())}}>increment</button>
//     <h1>{myaddd}</h1>
//     <button onClick={()=>(mydis(mydec()))}>decrement</button>
//     </>
    
  
//   )
// }

// export default App;


























// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { changeColor } from "./Tool/Colorchnage";





// const App=()=>{
//   const myclr=useSelector((state)=>state.mycolor.bgcolor);
//   const mydis =useDispatch();
//   const[clr,setclr]=useState("");
//   return(
//     <>
//       <h1>react tookit</h1>
//       Enter Coclor <input type="text"  value={clr}   onChange={(e)=>{setclr(e.target.value)}}/>
//       <button onClick={()=>{mydis(changeColor(clr))}}>change color</button>
//       <div style={{width:"500px",height:"500px",backgroundColor:myclr}}>

//       </div>
    
//     </>
//   )
// }

// export default App;