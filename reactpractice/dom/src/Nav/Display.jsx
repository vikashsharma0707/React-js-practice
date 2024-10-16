import axios from "axios";
import { useEffect, useState } from "react"


const Display=()=>{

  const [mydata,setdata] =useState([]);

  const showdata=()=>{
    let url="http://localhost:3000/student";
    axios.get(url).then((res)=>{
        setdata(res.data);
    })
  }

  useEffect(()=>{
    showdata();
  })


  let ans=mydata.map((key)=>{
      return(
        <>
         <tr>
            <th>{key.rollno}</th>
            <th>{key.name}</th>
            <th>{key.city}</th>
            <th>{key.course}</th>
         </tr>
        
        </>
      )
  })




    return(
        <>
           <h1>Display data</h1>
           <table>
            <tr>
                <th>Id</th>
                <th>Roll no</th>
                <th>Name</th>
                <th>City</th>
                <th>Course</th>

            
            </tr>
            <tbody>
                {ans}
            </tbody>
           </table>
        </>
    )
}

export default Display