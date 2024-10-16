
import { useSelector,useDispatch } from "react-redux";
import { mydic, myinc } from "./counterSlice";

const Display=()=>{
    const Counter=useSelector((state)=>state.mycounter.cnt)
    const mydis=useDispatch();
    return(
        <>
        <h1>My Counter App Rexu Toolkit</h1>
        <button onClick={()=>{mydis(myinc())}}>Increment</button>
        <h1>{Counter}</h1>
        <button onClick={()=>{mydis(mydic())}}>Decrement</button>
        </>
    )
}
export default Display;
