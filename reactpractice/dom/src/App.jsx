import axios from "axios";
import { useState } from "react"




const App=()=>{

    const[input,setdata]=useState({});
    const handlesubbmit=(e)=>{
        let name=e.target.value
        let value= e.target.value
        setdata(values=>({...values,[name]:value}))
    }


   const handlesubmit=(e)=>{
    let url="http://localhost:3000/student";
    axios.post(url,input).then((res)=>{
         alert("data save")
    }).catch(()=>{
        alert("data not save");
    })

   }


    return(
        <>
           <input type="text" placeholder="enter your rollno"  name="rollno"  value={input.rollno} onChange={handlesubbmit} />
           <input type="text" placeholder="enter your name" name="name" value={input.name}  onChange={handlesubbmit} />
           <input type="text" placeholder="enter your city" name="city" value={input.city}  onChange={handlesubbmit} />
           <input type="text" placeholder="enter your course" name="course" value={input.course}   onChange={handlesubbmit} />
           <button onClick={handlesubmit}>subbmit</button>
        </>
    )
}

export default App