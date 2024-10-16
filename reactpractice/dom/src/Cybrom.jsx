
const hello={
    height:"200px",
    width:"400px",
    backgroundColor:"yellow",
    margin:"auto",
    border:"2px ",
    borderRadius:"60%"

}

const hello1={
    height:"100px",
    width:"300px",
    backgroundColor:"blue",
    margin:"auto",
    border:"2px ",
    marginTop:"50px",
    position:"absolute",
    marginLeft:"50px"

}

const hello2={
    height:"60px",
    width:"160px",
    backgroundColor:"red",
    marginTop:"20px",
    position:"absolute",
    marginLeft:"50px",
     borderRadius:"60%"
}

const hello3={
    height:"40px",
    width:"20px",
    color:"white",
    position:"absolute",
    marginLeft:"35px",
    marginTop:"20px",
}




const Cybrom=()=>{
    return(
      <>
      <div  style={hello}>
         <div  style={hello1}>
            <div style={hello2}>
                 <div style={hello3}>
                       CYBROM
                 </div>

            </div>

         </div>

      </div>
      
      </>

    )
}

export default Cybrom