import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { cartrecDel } from "../cartSlice";
const CartProduct=()=>{
    const mycart= useSelector((state)=>state.mycart.cart);
    const dispatch= useDispatch();
   const cartRecDel=(id)=>{
        dispatch(cartrecDel(id))
   }
    let totalAmount=0;
    const ans=mycart.map((key)=>{
          totalAmount+=key.price;

         return(
            <>
              <tr>
                <td> <img src={"public/images/"+key.image}  width="100" height="80" /></td>
                <td>{key.name}</td>
                <td>{key.description}</td>
                <td>{key.price}</td>
                <td> 

                 <Button variant="primary" size="sm" onClick={()=>{cartRecDel(key.id)}}>Delete</Button>    
                    
                 </td>
              </tr>
            </>
         )
    })

    return(
        <>
         <h1 align="center"> Your Product Cart</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Decription</th>
          <th>Price</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {ans}


        <tr>
          <th></th>
          <th></th>
          <th>Total Amount :  </th>
          <th>{totalAmount}</th>
          <th></th>
        </tr>
      </tbody>
    </Table>
        </>
    )
}
export default CartProduct;