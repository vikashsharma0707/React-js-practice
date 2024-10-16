import { useState } from "react";
import { changeColor } from "./colorSlice";
import { useDispatch, useSelector } from "react-redux";
const Theme=()=>{
  const myclr=useSelector((state)=>state.mycolor.bgcolor)
  const mydis=useDispatch();
  const[clr,setClr]=useState("")
  return(
    <>
    <h1>Redux Toolkit</h1>
    Enter Your Color:<input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}}/>
    <button onClick={()=>{mydis(changeColor(clr))}}>Change Color</button>
    <div style={{width:"500px",height:"300px",backgroundColor:myclr}}></div>
    </>
  )
}
export default Theme;