



import { useEffect, useState } from "react";




const Example=()=>{

    const [count,setcount] =useState(0);
    const [multi,setmulti] =useState(1);

    useEffect(()=>{
        setmulti(count*2);
    },[count])
    return(
        <>
        
        <h1>count {count}</h1>
        <h2> multi {multi}</h2>
        <button onClick={()=>{setcount(count+1)}}>click here</button>
          
        </>
    )
}

export default Example;