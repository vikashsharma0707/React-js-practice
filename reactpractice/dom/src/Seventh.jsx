
import { useState } from "react";

const Seventh=()=>{

    const [roll,setroll]=useState("");
    const [name,setname] =useState("");
    const [phy,setphy] =useState("");
    const [che,setche] =useState("");
    const [math,setmath] =useState("");
    const [eng,seteng] =useState("");
    const [hindi,sethindi] =useState("");


    const display=()=>{
        /*let val={empno:empno,ta:ta,da:da,salary:salary};
        alert(JSON.stringify(val));*/

        let a=Number(phy)+Number(che)+Number(math)+Number(eng)+Number(hindi);
        alert(a);

        

        let b=0;
        if(a>60){
            console.log("first")
        }

        else if(a<45 && a<60){
            console.log("second")
        }

        else if(a<33 && a<45){
            console.log("third")
        }

        else{
            console.log("fail")
        }



        alert(b);
    }



    return(
        <>
        <input type="text" placeholder="rollno"  value={roll}  onChange={(e)=>{setroll(e.target.value)}}/>
       <br/>
       <input type="text" placeholder="name"  value={name}  onChange={(e)=>{setname(e.target.value)}}/>
       <br/>
       <input type="text" placeholder="phy"  value={phy}  onChange={(e)=>{setphy(e.target.value)}}/>
       <br/>
      <input type="text" placeholder="che"  value={che}  onChange={(e)=>{setche(e.target.value)}}/>
       <br/> 
       <input type="text" placeholder="math"  value={math}  onChange={(e)=>{setmath(e.target.value)}}/>
       <br/> 
       <input type="text" placeholder="eng"  value={eng}  onChange={(e)=>{seteng(e.target.value)}}/>
       <br/> 
       <input type="text" placeholder="hindi"  value={hindi}  onChange={(e)=>{sethindi(e.target.value)}}/>
       <br/> 

       <button onClick={display}>click here</button>
        
        
        </>
    )
}

export default Seventh;