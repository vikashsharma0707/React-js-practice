import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const ProductDisplay=()=>{
  const [myPro, setMyPro]=useState({
    id:"",
    name:"",
    description:"",
    images:"",
    price:""
  });
  const location= useLocation();
  useEffect(()=>{
       setMyPro(
        {
          id:location.state.id,
          name:location.state.name,
          description:location.state.description,
          images:location.state.images,
          price:location.state.price
        }
      )
  }, [])
  
    return(
        <>
          <div id="productData">
             <div>
           <img   src={`public/images/${myPro.images}`} style={{height:"300px", width:"300px"}} />
             </div>
             <div>
            <h2>   Product Name : {myPro.name} </h2> 
            <h4 style={{color:"blue"}}>Description: {myPro.description}  </h4>
            <h2 style={{color:"red"}}>Price : {myPro.price} </h2>
            <button> Add to Cart</button>
             </div>
          </div>
        </>
    )
}

export default ProductDisplay;