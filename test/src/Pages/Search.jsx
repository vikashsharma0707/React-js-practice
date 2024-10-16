import axios from "axios";
import { useState } from "react";


const Search=()=>{
  const [productno, setRollno]=useState("");
  const [mydata, setMydata]=useState([])

  const [errMsg, setErrMsg]= useState(false);
  const handleSubmit=()=>{
    let url=`http://localhost:3000/customer/?productno=${productno}`;
    axios.get(url).then((res)=>{
      setMydata(res.data);
      if (res.data.length>=1)
      {
        setErrMsg(false)
      }
      else
      {
        setErrMsg(true)
      }
    });
  }
  const ans=mydata.map((key)=>{
        return(
          <>
              <h1>Rollno : {key.productno} </h1>
              <h2>  Name : {key.productqn}</h2>
              <h2> City : { key.price }</h2>
              <h1> Total Fees : {key.cname}</h1>
              <h1> Total Fees : {key.prodeuctn}</h1>

          </>
        )    
  })



  return(
        <>
          <h1> Search Students Record</h1>
          Enter Rollno : <input type="text" 
          value={productno} onChange={(e)=>{setRollno(e.target.value)}} />
          <button  onClick={handleSubmit}>Search</button>
          <hr size="4"color="blue"/>
           {ans.length>=1 ? ans :(  errMsg? message.error("Rollno Not Found"): "")}
        </>
    )
}


export default Search;