import { useParams } from "react-router-dom";


const ProductDisplay=(props)=>{
    const {id} = useParams();
    return(
        <>
          <div id="productData">
             <div>
           <img   src={"public/images/"+props.pimg} style={{height:"500px"}} />
             </div>
             <div>
            <h1>   Product Name : {props.nm} {id} </h1> 
            <h3>Description:  {props.desc}</h3>
            <h2>Price : {props.price}</h2>
             </div>
          </div>
        </>
    )
}

export default ProductDisplay;