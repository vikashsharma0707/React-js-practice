import axios from "axios";
import { useState } from "react"



const Insert=()=>{

const [input,setinput] =useState({});

const handlesummit=(e)=>{
  let name=e.target.name;
  let value= e.target.value;
  setinput(values=>({...values,[name]:value}))
}

const handle=(e)=>{
  let url="http://localhost:3000/employee";
  axios.post(url,input).then((res)=>{
    alert("data saved ")
  }).catch((err)=>{
    console.log("data is not inserting")
  })
}


 return(
  <>


  <input type="text" placeholder="empid"  name="empid" value={input.empid}  onChange={handlesummit}/>
  <br/>
  <input type="text" placeholder="name"   name="name" value={input.name}  onChange={handlesummit}/>
  <br/>
  <input type="text" placeholder="desi"   name="" value={input.desi}  onChange={handlesummit}/>
  <br/>
  <input type="text" placeholder="dept"  name="dept" value={input.dept}  onChange={handlesummit}/>
  <br/>
  <input type="text" placeholder="salary"  name="salary" value={input.salary}  onChange={handlesummit}/>
  <br/>
  <button onClick={handle}>click here</button>
  
  </>
 )
}


export default Insert



















// import axios from 'axios';
// import { useState } from 'react';




// const Insert=()=>{

//   const [input,setinput]=useState({});


//   const handle=(e)=>{
//     let name=e.target.name;
//     let value =e.target.value;
//     setinput(values=>({...values,[name]:value}))
//   }


//   const handlesubmit=(e)=>{
//     let url="http://localhost:3000/employee";
//     axios.post(url,input).then((res)=>{
//       alert("Data saved");
//     }).catch((err)=>{
//      console.log("data is not inserting");
//     })
//   }


//   return(
//     <>
//       <input type="text" placeholder="empno"  name="empno" value={input.value}  onChange={handle}/>
//     <br/>
//     <input type="text" placeholder="name"  name="name" value={input.value}  onChange={handle}/>
//      <br/>
//     <input type="text" placeholder="city"  name="city" value={input.value}  onChange={handle}/>
//      <br/>
//      <input type="text" placeholder="salary"  name="salary" value={input.value}  onChange={handle}/>
//     <br/>
//       <button onClick={handlesubmit}>data save</button>
//     </>
    
    
//   )
// }


// export default Insert;








// import axios from "axios";
// import { useState } from "react"




// const Insert=()=>{


//     const [input,setinput] =useState({});

//     const handleinput=(e)=>{
//         let name= e.target.name;
//         let value =e.target.value;

//         setinput(values=>({...values,[name]:value}))
//     }

//     const handlesubmit=(e)=>{
//           let url ="http://localhost:3000/student";
//           axios.post(url,input).then((res)=>{
//             alert("data is saved");
//           }).catch((err)=>{
//              console.log("data is not inserting");
//           })
//     }

//     return(
//      <>
//      <input type="text" placeholder="rollno"  name="rollno" value={input.value}  onChange={handleinput}/>
//      <br/>
//      <input type="text" placeholder="name"  name="name" value={input.value}  onChange={handleinput}/>
//      <br/>
//      <input type="text" placeholder="fees"  name="fees" value={input.value}  onChange={handleinput}/>
//      <br/>
//      <input type="text" placeholder="city"  name="city" value={input.value}  onChange={handleinput}/>
//      <br/>
//      <button onClick={handlesubmit}>data save</button>
     
     
//      </>

//     )
// }

// export default Insert