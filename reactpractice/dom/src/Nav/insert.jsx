import axios from "axios";
import { useState } from "react"




const Insert=()=>{
 
    const [input,setinput]  =useState({});
    const handleinput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setinput(values=>({...values,[name]:value}))
    }


    const handlesubmit=(e)=>{
     let url="http://localhost:3000/student";
     axios.post(url,input).then((res)=>{
          alert("data save")
     }).catch((err)=>{
       alert("data is not save")
     })
    }


    return(
        <>
        <h1>Insert Data</h1>
        Enter Rollno <input type="text" name="rollno" value={input.rollno} onChange={handleinput}/>
        <br/>

        Enter Name <input type="text" name="name" value={input.name} onChange={handleinput}/>
        <br/>

        Enter City <input type="text" name="city" value={input.city} onChange={handleinput}/>
        <br/>

        Enter Course <input type="text" name="course" value={input.course} onChange={handleinput}/>
        <br/>

        <button onClick={handlesubmit}>Save data</button>
        </>
    )
}

export default Insert