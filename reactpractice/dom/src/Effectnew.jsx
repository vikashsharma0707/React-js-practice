import { useState } from "react";



const Effectnew=()=>{

    const [empno,setempno]=useState("");
    const [ta,setta] =useState("");
    const [da,setda] =useState("");
    const [salary,setsal] =useState("");


    const display=()=>{
        let val={empno:empno,ta:ta,da:da,salary:salary};
        alert(JSON.stringify(val));

        let a=Number(ta)+Number(da)+Number(salary);
        console.log(a);

        let b=0;
        if(a>5000){
            b=a*10/100;
        }

        else if(a>10000){
           b=a*10/100;
        }

        alert(b);
    }



    return(
        <>
        <input type="text" placeholder="empno"  value={empno}  onChange={(e)=>{setempno(e.target.value)}}/>
       <br/>
       <input type="text" placeholder="ta"  value={ta}  onChange={(e)=>{setta(e.target.value)}}/>
       <br/>
       <input type="text" placeholder="da"  value={da}  onChange={(e)=>{setda(e.target.value)}}/>
       <br/>
       <input type="text" placeholder="salary"  value={salary}  onChange={(e)=>{setsal(e.target.value)}}/>
       <br/>

       <button onClick={display}>click here</button>
        
        
        </>
    )
}









// import { useEffect, useState } from "react";




// const Effectnew=()=>{

//     const [count,setcount] =useState(0);
//     const [multi,setmulti] =useState(1);

//     useEffect(()=>{
//         setmulti(count*2);
//     },[count])
//     return(
//         <>
//         <button onClick={()=>{setcount(count+1)}}>click here</button>
//         <h1>count {count}</h1>
//         <h2> multi {multi}</h2>
          
//         </>
//     )
// }














// one time run
// import { useEffect, useState } from "react"
// const Effectnew=()=>{


//     const [count,setcount] =useState(0);

//     useEffect(()=>{
//         setTimeout(()=>{
//           setcount(count+1);
//         })
//     },[])
//     return(
//         <>
//         <h1>the count {count}</h1>
//         </>
//     )
// }










// contnue useEffect
// import { useEffect, useState } from "react";
// const Effectnew=()=>{

//     const [count,setCount] =useState(0);

//     useEffect(()=>{
//         setTimeout(()=>{
//           setCount(count+1)
//         },5000)
//     })
//     return(
//         <>
        
//         <h1>the value of {count}</h1>
//         </>
//     )
// }

 export default Effectnew;