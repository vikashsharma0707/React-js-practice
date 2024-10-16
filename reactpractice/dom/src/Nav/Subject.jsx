import { useState } from "react";





const Subject=()=>{

    const [roll,setroll] =useState("");
    const [name,setname]= useState("");
    const [eng,seteng]  = useState("");
    const [phy,setphy] =useState("");
    const [math,setmath] =useState("");

    const display=()=>{
      let a= Number(eng)+Number(phy)+Number(math);

      if(a>60){
        alert("first division");
      }

      else if(a>50){
        alert("second division");
      }

      else if(a>40){
        alert("third division");
      }

      else{
        alert("fail");
      }

    }


    return(
        <>
         <input type="text" value={roll} onChange={(e)=>{setroll(e.target.value)}}/>
         <br/>

         <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
         <br/>

         <input type="text" value={eng} onChange={(e)=>{seteng(e.target.value)}}/>
         <br/>

         <input type="text" value={phy} onChange={(e)=>{setphy(e.target.value)}}/>
         <br/>

         <input type="text" value={math} onChange={(e)=>{setmath(e.target.value)}}/>
         <br/>

         <button onClick={display}>click here</button>
        
        </>
    )
}

export default Subject;