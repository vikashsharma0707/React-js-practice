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
  let url="http://localhost:3000/customer";
  axios.post(url,input).then((res)=>{
    alert("data saved ")
  }).catch((err)=>{
    console.log("data is not inserting")
  })
}


 return(
  <>


  <input type="text" placeholder="prodeuct name"  name="productno" value={input.productno}  onChange={handlesummit}/>
  <br/>
  <input type="text" placeholder="name"   name="productqn" value={input.productqn}  onChange={handlesummit}/>
  <br/>
  <input type="text" placeholder="price"   name="price" value={input.price}  onChange={handlesummit}/>
  <br/>
  <input type="text" placeholder="rodeuctn"  name="cname" value={input.name}  onChange={handlesummit}/>
  <br/>
  <input type="text" placeholder="prodeuctn"  name="prodeuctn" value={input.salary}  onChange={handlesummit}/>
  <br/>
  <button onClick={handle}>click here</button>
  
  </>
 )
}


export default Insert