import { useState } from "react";

const Effect=()=>{
   const [empno,setempno] =useState("");
   const [ta,setta] =useState("");
   const [da,setda] = useState("");
   const [salary,setsalary] =useState("");


   const display=()=>{
     let val={empno:empno,ta:ta,da:da,salary:salary}
     alert(JSON.stringify(val));

     let a=Number(ta)+Number(da)+Number(salary);
     console.log(a);

     let b=0;
     if(a>5000){
      b=a*10/100;
     }

     else if(a>10000){
      b= a*50/100
     }

     alert(b);


   }


  return(
    <>
      <input type="text" placeholder="empno" value={empno} onChange={(e)=>{setempno(e.target.value)}} />
      <br/>
      <input type="text" placeholder="ta"   value={ta} onChange={(e)=>{setta(e.target.value)}} />
      <br/>
      <input type="text" placeholder="da" value={da} onChange={(e)=>{setda(e.target.value)}} />
      <br/>
      <input type="text" placeholder="salary"  value={salary} onChange={(e)=>{setsalary(e.target.value)}} />
      <br/>
      <button onClick={display}>click here</button>
      
      
    
    </>
  )
}












/*import { useState } from "react";

const Effect = () => {
  const [empno, setEmpno] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");

  const handle = () => {
    let val = { empno, name, city, salary };
    alert(JSON.stringify(val));
    let a = Number(empno) + Number(name) + Number(city) + Number(salary);
    console.log(a);

    if(a>50){
      var b= a*10/100
    }

    else if(a>50000000){
      var b= a*50/100
    }

    alert("bonus"+b)
  };

  

  return (
    <>
      <label>Employee Number:</label>
      <input
        type="text"
        placeholder="Employee Number"
        value={empno}
        onChange={(e) => setEmpno(e.target.value)}
      />
      <br />
      <label>Name:</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>City:</label>
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <label>Salary:</label>
      <input
        type="text"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <br />
      <button onClick={handle}>Click Here</button>
    </>
  );
};*/











// import { useState } from "react";

// const Effect=()=>{
//   const [empno,setempno] =useState("");
//   const [ta,setname] =useState("");
//   const [da,setcity]= useState("");
//   const [salary,setfees]  =useState("");

//  const handle=()=>{
 
//   let val={empno:empno,ta:ta,da:da,salary:salary}
//   alert(val);
//   let a=empno+ta+da+salary
//   console.log(a);
//  }


// return(
//   <>
//   <input type="text" placeholder="empno"   value={empno}  onChange={(e)=>{setempno(e.target.value)}}/>
//   <br/>
//   <input type="text" placeholder="empno" value={ta}  onChange={(e)=>{setname(e.target.value)}}/>
//   <br/>
//   <input type="text" placeholder="empno" value={da} onChange={(e)=>{setcity(e.target.value)}}/>
//   <br/>
//   <input type="text" placeholder="empno" value={salary} onChange={(e)=>{setfees(e.target.value)}}/>
//   <br/>
//    <button  onClick={handle}>click here</button>
  
//   </>

// )
// }











// const Effect=()=>{
//     const [empno,setempno] =useState("");
//     const [name,setname] =useState("");
//     const [city,setcity]= useState("");
//     const [fees,setfees]  =useState("");

//    const handle=()=>{
   
//     let val={empno:empno,name:name,city:city,fees:fees}
//     alert(val);
//     let a=empno+name+city+fees;
//     console.log(a);
//    }


//   return(
//     <>
//     <input type="text" placeholder="empno"   value={empno}  onChange={(e)=>{setempno(e.target.value)}}/>
//     <br/>
//     <input type="text" placeholder="empno" value={name}  onChange={(e)=>{setname(e.target.value)}}/>
//     <br/>
//     <input type="text" placeholder="empno" value={city} onChange={(e)=>{setcity(e.target.value)}}/>
//     <br/>
//     <input type="text" placeholder="empno" value={fees} onChange={(e)=>{setfees(e.target.value)}}/>
//     <br/>
//      <button  onClick={handle}>click here</button>
    
//     </>

//   )
// }





















//value
/*import { useState } from "react";


const Effect=()=>{
    const [name,setname] =useState("");
    const [city,setcity] =useState("");

    const handle=()=>{
     let val={name:name,city:city};
     alert(val);
    }

    return(
     <>
     <input type="text" placeholder="name" value={name}  onChange={(e)=>{setname(e.target.name)}}/>
     <br/>
     <input type="text" placeholder="city" value={city} onChange={(e)=>{setcity(e.target.city)}}/>
     <br/>

     <button  onClick={handle}>click here</button>
     
     
     </>

    )
}*/




















// increment and decrement by 10
/*import { useState } from "react";
const Effect=()=>{
  const [cnt,setData] =useState(0);

  const incre=()=>{
    setData(cnt+10);
  }

  const decre=()=>{
    setData(cnt-10);
  }

  const ret=()=>{
    setData(0);
  }
    return(
        <>
        <h1>count :{cnt}</h1>
          <button onClick={incre}>increment</button>
          <button onClick={decre}>decrement</button>
          <button onClick={ret}>reset</button>
        
        </>
    )
}*/




//import { useState } from "react";

// color change

// const Effect=()=>{

//     const [mydata,setData]  = useState("yellow;")
//     const display=()=>{
//         setData("blue")
//     }


//     return(
    
//         <>
//         <h1 style={{color:mydata}}>this is red color {mydata}</h1>
//         <button onClick={display}>click here</button>
//         <button onClick={()=>{setData("red")}}>click here</button>
//         <button onClick={()=>{setData("yellow")}}>click here</button>
//         <button onClick={()=>{setData("pink")}}>click here</button>
//         <button onClick={()=>{setData("oranage")}}>click here</button>
        
//         </>
//     )
// }


// put the value
// import { useState } from "react";
// const Effect=()=>{
//   const [mydata,setData] =useState("");

//   const display=()=>{
//     setData("red");
//   }

//     return(
//         <>
//         <h1> this is effect page {mydata}</h1>
//         <button onClick={display}>click here</button>
        
//         </>
//     )
// }





// cahnge the value
// import { useState } from "react"

// const Effect=()=>{
//     const [mydata,setData] = useState("jay");

//     return(
//        <>
//        <h1>this is effect page  {mydata}</h1>
//        <button onClick={()=>{setData("rahul")}}>clich here</button>
       
//        </>

//     )     
    
// }

export default Effect;

