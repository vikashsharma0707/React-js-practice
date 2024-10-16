




const Event=()=>{
    const getval=(e)=>{
        let nm = e.target.name;
        let val=e.target.value;
        alert("Name :" +nm +"value :" +val)
      }
      return(
        <>
         <h1>this is react event</h1>
         enter name : <input type="text" name="student"  value="bhopal"  onClick={getval}/>
        
    </>
      )
    
   
}














// let value
// const Event=()=>{

//     const display=(e)=>{
//         let nm=e.target.name;
//         let val=e.target.value;
//         let typ=e.target.type;
//         alert("name"+nm+"value"+val+"typ"+"type"+typ)

//     }


//     return(
//       <>
//        <h1> this is event page</h1>
//        <button  onClick={display} type="button" name="jay" value="hello" >click here</button>
      
//       </>

//     )
// }







// click event
// const Event=()=>{

//     const hello=(nm,b)=>{
//        alert("java is" +nm+b.type);
//     }

//     return(
//         <>
//           <h1>this is event function</h1>
//           <button onClick={(e)=>{hello("jay",e)}}>click here</button>
//         </>
//     )
// }
























//square number
/*const Event=()=>{

    const hello=(a)=>{
        alert(a*a);
    }


    return(
     <>
       <h1> this is event function</h1>
       <button onClick={()=>{hello(2)}}>click here</button>
     
     
     </>

    )
}*/














// Addition of two  numbers
// const Event=()=>{

//     const hello=(a,b)=>{
//         alert(a+b);
//     }


//     return(
//      <>
//        <h1> this is event function</h1>
//        <button onClick={()=>{hello(2,3)}}>click here</button>
     
     
//      </>

//     )
// }



















// double paramter function
// const Event=()=>{

//   const hello=(nm,mn)=>{
//    alert("programming languages" +nm+mn+"very difficult")
//   }


//     return(
//         <>
//            <h1>this is event  function</h1>
//            <button onClick={()=>{hello("java","react")}}>click here</button>
//         </>
//     )
// }




// single parameter function
// const Event=()=>{
//     const myname=(nm)=>{
//       alert("my name"+nm+"bhopal");
//     }
  
//     return(
//       <>
//        <h1>this is event function</h1>
//        <button  onClick={()=>{myname("jay")}}>click here</button>
  
//       </>
//     )
//   }





// normal function
// const Event=()=>{
//   const display=()=>{
//     alert("this is event function");
//   }



//     return(
//         <>
//         <h1>this is event function</h1>
//         <button onClick={display}>click here</button>
//         </>
//     )
// }

export default Event;